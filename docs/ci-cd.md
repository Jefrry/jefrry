# CI и production-деплой

Принцип взят из [post-sentry](https://github.com/Jefrry/post-sentry/blob/main/.github/workflows/deploy.yml): отдельный CI, ручной production workflow, публикация в GHCR и запуск на VPS по точному digest. По уточнениям владельца CI проверяет только ESLint, а отдельного deploy.sh нет: команды обновления находятся непосредственно в SSH-шаге `.github/workflows/deploy.yml`.

## Выпуск

`.github/workflows/ci.yml` запускается для PR и push в main, устанавливает зависимости по frozen lockfile и выполняет `pnpm lint`. Он также вызывается production workflow для выбранного SHA. Node.js 24.12.0 и pnpm 12.6.0 согласованы с Dockerfile. Автоматических тестов, typecheck, проверочной сборки и HTTP-проверок в CI/CD нет.

Actions → **Deploy production** → **Run workflow** → ветка **main**. Пустой `commit` фиксирует текущую main в начале verify-main; можно указать полный SHA из её истории. Workflow проверяет принадлежность коммита main, запускает ESLint, собирает Linux/amd64 образ, публикует `ghcr.io/jefrry/jefrry:<SHA>` и передаёт на VPS Compose вместе с release.env, содержащим точный IMAGE_REF по digest и RELEASE_SHA. Имя GHCR вычисляется из имени репозитория; ARM требует отдельной адаптации.

На сервере команды из workflow выполняют `docker compose pull site` и `docker compose up -d --no-build --pull never`. Статический сайт собирается внутри production-образа, на VPS сборки нет. Точный digest не зависит от последующих изменений тега. PR не вызывает production-деплой и не получает секреты сервера. Ошибка линтера или сборки запрещает доставку; только build имеет packages: write, deploy — packages: read. Actions закреплены полными SHA.

## Подготовка VPS и GitHub

Нужны Linux/amd64, Docker Engine, Compose v2 с несколькими --env-file, Bash, flock, SSH/SFTP. Пользователь доставки должен запускать Docker без sudo (группа docker даёт полномочия уровня root) и иметь запись в `~/apps/jefrry`. Настройте DNS, порты и HTTPS по [инструкции Docker/Caddy](deployment.md#подготовленный-vps-и-https).

Создайте `~/apps/jefrry/.env` с правами 600:

```dotenv
SITE_ADDRESS=jefrry.dev
BIND_ADDRESS=0.0.0.0
HTTP_PORT=80
HTTPS_PORT=443
```

Используется прежнее имя Compose-проекта jefrry-portfolio: при том же Docker Engine тома сертификатов сохраняются. При переходе из 06 перенесите параметры .env.production в этот .env. Старые Compose и образ сохраните отдельно до первого успешного управляемого выпуска.

Создайте environment **production**, ограничьте его веткой main и добавьте секреты с теми же именами, что в post-sentry:

| Secret | Значение |
| --- | --- |
| VPS_HOST | DNS-имя или IPv4 VPS, без схемы |
| VPS_PORT | SSH-порт, например 22 |
| VPS_USER | Пользователь доставки |
| VPS_SSH_KEY | Полный отдельный приватный SSH-ключ без пароля |
| VPS_KNOWN_HOSTS | Независимо проверенная запись OpenSSH known_hosts |

Установите публичную часть ключа в authorized_keys пользователя доставки; допустима опция restrict, без command=, поскольку нужны SCP и Bash. Права .ssh — 700, authorized_keys — 600. Отпечаток host key сверяйте через доверенную консоль провайдера; одного ssh-keyscan недостаточно. Для нестандартного порта known_hosts содержит имя вида [host]:2222. Workflow использует StrictHostKeyChecking=yes.

GHCR использует GITHUB_TOKEN: постоянный токен реестра в secrets не нужен. Разрешите используемые actions и доступ репозитория к Packages; для существующего пакета проверьте Manage Actions access. Для защиты main назначьте CI checks обязательной проверкой. SITE_URL не требуется.

SSH-ключ хранится во временной папке runner. Docker login на сервере получает токен через stdin и использует отдельную папку `releases/<run_id>-<attempt>/.docker`; при выходе выполняются logout и удаление этой папки, авторизация других приложений не меняется. При потере связи очистка может не выполниться; оставшийся .docker удалите вручную. Токен ограничен временем работы job. Не печатайте секреты и не включайте set -x.

## Порядок обновлений и состояние

Весь workflow сериализован concurrency-группой production-deployment. SSH-команды дополнительно используют серверный deploy.lock и latest-sequence: более старый github.run_number пропускается, повтор того же номера разрешён. Номер фиксируется перед заменой контейнера и сохраняется при отказе. Не удаляйте этот маркер и не сбрасывайте счётчик workflow без переноса состояния.

В `~/apps/jefrry` хранятся текущие compose.yaml и .release.env, предыдущие compose.yaml.previous и .release.env.previous, а также `releases/<run_id>-<attempt>/` с Compose и release.env каждого запуска. Отдельных .sh-файлов и .next-файлов нет. Compose читает сначала .env, затем release-файл; IMAGE_REF по digest имеет приоритет, SITE_IMAGE из 06 остаётся fallback для независимого ручного запуска.

Ошибка pull не останавливает старую версию. При ошибке up workflow пытается запустить предыдущую версию из текущих файлов; при первом выпуске без предыдущей версии останавливает неуспешный контейнер. Job остаётся неуспешным даже после восстановления. Прерывание SSH или отказ записи файлов требуют ручной диагностики. Доступность сайта и ошибки после запуска автоматически не проверяются.

Re-run failed jobs повторяет доставку digest успешного build этого запуска. Re-run all jobs заново выбирает SHA: при пустом commit это может быть новая main. Для известного коммита указывайте SHA явно. Для возврата именно к прежнему образу используйте сохранённый digest: пересборка того же SHA может дать другой образ.

## Диагностика и ручной откат

```sh
cd ~/apps/jefrry
cat .release.env
docker compose --env-file .env --env-file .release.env ps
docker compose --env-file .env --env-file .release.env logs --tail=100 site
```

Фактический образ контейнера проверяйте через docker inspect; при прерванной доставке он может отличаться от release-файла. HTTP проверяется вручную по [инструкции](deployment.md#проверка-выпуска-и-диагностика).

Для возврата предыдущего сохранённого образа выполните в Bash:

```sh
(
  set -eu
  cd ~/apps/jefrry
  exec 9>deploy.lock
  flock -w 300 9
  docker compose --project-directory "$PWD" --env-file .env --env-file .release.env.previous -f compose.yaml.previous up -d --no-build --pull never
  cp compose.yaml.previous compose.yaml
  cp .release.env.previous .release.env
)
```

Храните минимум текущий и предыдущий образ на VPS и их digest в GHCR; не удаляйте их через docker image prune -a. Если старый образ отсутствует локально, перед откатом загрузите его по сохранённому digest (для private GHCR нужен login с read:packages через password-stdin). Тома Caddy не удаляются. latest-sequence при ручном откате не уменьшается; следующий новый ручной workflow снова может обновить сайт.

VPS и доступы не предоставлены. Реальные GitHub/GHCR/SSH, DNS и TLS не проверены; наличие workflow не означает выполненную публикацию.
