# Docker и Caddy

Образ собирает сайт через `pnpm generate`, затем Caddy раздаёт только `.output/public/`. Node.js, исходники, зависимости Nuxt и папка референса в финальном образе не нужны. Базы данных нет. HTML, клиентские ресурсы, шрифты, изображения и PDF поставляются одним образом; папка сайта с хоста не монтируется.

В `Dockerfile` закреплены Node.js 24.12.0 и Caddy 2.11.7 вместе с digest многоархитектурных образов, pnpm 12.6.0 совпадает с `package.json`, установка использует `--frozen-lockfile`. Обновляйте версии и digest осознанно, после проверок. `.dockerignore` пропускает только входные файлы сборки: `.env`, Git, локальные зависимости и референс не отправляются в контекст. Production-секреты сборке не требуются.

## Локальный запуск

Нужны Docker Engine/Docker Desktop в режиме Linux-контейнеров и Docker Compose v2. Команды выполняются из корня репозитория:

```sh
docker compose --env-file .env.example build site
docker compose --env-file .env.example up -d --no-build
docker compose --env-file .env.example logs --tail=50 site
```

Откройте `http://localhost:8080/`. Пример окружения привязывает порты только к локальному компьютеру и использует HTTP без сертификатов. Для собственных значений скопируйте `.env.example` в `.env.local` и во всех командах указывайте `--env-file .env.local`. Эти локальные файлы исключены из Git.

```sh
docker compose --env-file .env.example down
```

Остановка сохраняет тома. Не добавляйте `--volumes`: на VPS это удалит сохранённое состояние сертификатов. Не запускайте локальную и production-конфигурацию одновременно на одном Docker Engine: у них общее имя проекта и томов.

## Подготовленный VPS и HTTPS

Предполагаются Linux VPS с Docker Engine и Compose v2, SSH-доступ владельца и свободные порты. Создайте на сервере рабочую папку, например `/opt/jefrry`, и скопируйте туда `compose.yaml`. Сборка на VPS не нужна. Создайте рядом `.env.production`:

```dotenv
SITE_IMAGE=jefrry-portfolio:release-20261029-1
SITE_ADDRESS=jefrry.dev
BIND_ADDRESS=0.0.0.0
HTTP_PORT=80
HTTPS_PORT=443
```

Параметры:

| Переменная | Назначение |
| --- | --- |
| `SITE_IMAGE` | Точный тег выпуска или ссылка на образ по digest; задавайте новое значение для каждой версии |
| `SITE_ADDRESS` | `jefrry.dev` включает автоматический HTTPS; `http://localhost` используется для локальной проверки |
| `BIND_ADDRESS` | Сетевой интерфейс хоста: `127.0.0.1` локально, `0.0.0.0` на VPS |
| `HTTP_PORT`, `HTTPS_PORT` | Порты хоста; на публичном сервере оставьте 80 и 443 |

Настройте DNS-запись A `jefrry.dev` на IPv4 VPS. Если публикуете AAAA, IPv6 тоже должен вести на доступный сервер. Откройте входящие TCP 80/443 и, для HTTP/3, UDP 443 в сетевых правилах провайдера и хоста. Caddy должен иметь исходящий доступ к центру сертификации. Обратный прокси перед контейнером для этой конфигурации не требуется.

При `SITE_ADDRESS=jefrry.dev` Caddy получает сертификат и перенаправляет HTTP на HTTPS. Тома `caddy_data` (`/data`) и `caddy_config` (`/config`) сохраняются при пересоздании контейнера с тем же именем Compose-проекта. Не удаляйте их при обновлении и храните резервную копию `/data` с ограниченным доступом: там находятся ключи сертификатов. Не копируйте эти данные в образ или репозиторий. Домены в canonical и sitemap задаются отдельно в `app/constants/site/site.ts`; при смене домена обновите его и пересоберите образ.

## Ручной выпуск и обновление

Перед выпуском выполните в исходниках:

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
```

Автоматические тесты по решению владельца не добавлены. Статическая генерация выполняется в Docker-сборке. Используйте уникальный тег выпуска, не перезаписывайте предыдущий. Пример для первого выпуска:

```sh
docker build -t jefrry-portfolio:release-20261029-1 .
docker save -o jefrry-release-20261029-1.tar jefrry-portfolio:release-20261029-1
scp jefrry-release-20261029-1.tar user@vps:/opt/jefrry/
```

`user@vps` замените своими SSH-параметрами. Архитектура сборки должна совпадать с VPS: для amd64 при сборке на ARM используйте `docker buildx build --platform linux/amd64 --load -t jefrry-portfolio:release-20261029-1 .` (нужна поддержка эмуляции); для ARM VPS — `linux/arm64`.

На VPS из `/opt/jefrry`:

```sh
docker load -i jefrry-release-20261029-1.tar
docker compose --env-file .env.production config
docker compose --env-file .env.production up -d --no-build --pull never
docker compose --env-file .env.production ps
docker compose --env-file .env.production logs --tail=100 site
```

Для следующего выпуска повторите сборку, передачу и загрузку с новым тегом, сохраните предыдущее значение `SITE_IMAGE`, затем измените его в `.env.production` и выполните `up -d --no-build --pull never`. Compose заменит контейнер целиком, включая HTML и ресурсы. Исходники и Node.js на VPS не нужны. Во время замены возможен краткий перерыв; эта схема не обещает непрерывную доступность. Проверяйте новый выпуск по HTTP после каждой замены. Уже открытая вкладка может запросить старый ленивый ресурс после обновления; перезагрузка страницы получает HTML и ресурсы новой версии.

Не копируйте отдельные файлы в работающий контейнер и не накладывайте новую `.output/public/` поверх старой: это оставляет удалённые страницы и смешивает выпуски. Автоматическая доставка GitHub Actions относится к пункту 07.

## Контент, PDF и статьи

- Для изменения профиля, опыта, проектов и переводов используйте файлы, перечисленные в [локальной разработке](local-development.md#обновление-содержимого).
- Русский PDF заменяется в `public/assets/egor-ilin-resume.pdf`. Отдельный английский PDF добавьте в `public/assets/` и назначьте в `PROFILES.en.resume` файла `app/constants/profile/profile.ts`.
- Для включения статей добавьте `import { ARTICLES } from './articles';` в начало `app/constants/articles/articleRoutes.ts`, снимите `/* ... */` с объекта `ARTICLE_ROUTES` и замените тестовый контент в `app/constants/articles/articles.ts`. Для выключения верните комментарий и удалите добавленный импорт. Подробности — в [инструкции раздела статей](local-development.md#выключенный-раздел-статей).

После любого изменения собирайте новый образ и заменяйте контейнер по процедуре выше. Caddy не содержит перечня страниц: новые каталоги, проекты и включённые статьи обслуживаются по наличию их `index.html`. Выключение статей с заменой образа удаляет и ранее опубликованные страницы раздела.

## Адреса, ошибки и кеш

`Caddyfile` раздаёт директории через `index.html`. Для существующей страницы запрос без завершающего слеша получает 308 на адрес со слешем; параметры запроса сохраняются. Это совпадает с canonical и sitemap пункта 05. Файлы PDF, CSS, JS и изображения открываются по своим адресам без добавления слеша.

Неизвестные адреса, неподдерживаемые языки, отсутствующие проекты и выключенные статьи возвращают `404.html` с HTTP 404. Общего fallback на `/index.html` или `/200.html` нет. Не добавляйте его при настройке другого хостинга.

По умолчанию используется `Cache-Control: no-cache`: HTML, PDF, изображения с постоянным именем, payload и метаданные сборки нужно проверять у сервера перед повторным использованием. Годовое `public, max-age=31536000, immutable` получают только существующие JS/CSS/шрифты непосредственно в `/_nuxt/` с восьмисимвольным хешем Nuxt в имени. Отсутствующий ресурс получает 404 с `no-cache`. При изменении формата хешей сборщика обновите matcher после проверки; несовпавшие новые имена останутся с безопасным `no-cache`.

## Проверка выпуска и диагностика

Для локального контейнера выполняйте команды ниже; на VPS замените `http://localhost:8080` на `https://jefrry.dev`. В PowerShell используйте `curl.exe` вместо `curl`, если `curl` является псевдонимом:

```sh
curl -I http://localhost:8080/
curl -I http://localhost:8080/ru/
curl -I http://localhost:8080/en/
curl -I http://localhost:8080/ru/projects/test-atlas/
curl -I 'http://localhost:8080/en/projects/test-atlas?category=frontend'
curl -I http://localhost:8080/assets/egor-ilin-resume.pdf
curl -I http://localhost:8080/sitemap.xml
curl -I http://localhost:8080/robots.txt
curl -I http://localhost:8080/ru/projects/missing/
curl -I http://localhost:8080/fr/
curl -I http://localhost:8080/ru/articles/
curl -I http://localhost:8080/en/articles/test-first-note/
```

Ожидания: существующие адреса — 200, вариант страницы без слеша — 308 с `Location` со слешем и прежними параметрами; последние четыре адреса при выключенных статьях — 404. Для включённых статей проверьте обе языковые версии каталога и статьи на 200, затем после выключения и нового выпуска — снова 404.

Откройте вложенную страницу напрямую и перезагрузите её. В исходном HTML найдите фактические пути JS/CSS и шрифтов `/_nuxt/`, запросите их и `/assets/whale.png`, `/assets/stars.svg`, обложки проектов: ожидаются 200, правильные Content-Type и Cache-Control. PDF должен начинаться с `%PDF-`, а не HTML. Проверьте тело неизвестного адреса: это оформленная страница ошибки со статусом 404. Повторите проверку после обновления и отката.

При ошибке изучите `docker compose --env-file .env.production logs --tail=100 site`, состояние контейнера и вывод `docker compose --env-file .env.production config`. Конфигурацию внутри образа можно проверить командой `docker compose --env-file .env.production run --rm --no-deps site caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile`. Если сертификат не выпущен, сначала проверьте DNS, AAAA, TCP 80/443, исходящую сеть и журнал Caddy. Локальный HTTP не подтверждает работу сертификата на реальном домене.

## Откат

Сохраняйте на сервере хотя бы текущий и предыдущий образ и соответствующие теги в журнале выпусков. До обновления запишите `SITE_IMAGE` и фактический ID работающего образа (`docker compose --env-file .env.production images`). Не удаляйте предыдущий образ через очистку Docker.

Для отката укажите прежний тег `SITE_IMAGE` в `.env.production`, убедитесь, что он доступен (`docker image inspect jefrry-portfolio:release-20261029-1`), и выполните:

```sh
docker compose --env-file .env.production up -d --no-build --pull never
docker compose --env-file .env.production ps
```

Повторите HTTP-проверки. Откат восстанавливает весь предыдущий сайт вместе с ресурсами; тома сертификатов сохраняются. Если локальный образ удалён, загрузите сохранённый архив через `docker load` перед запуском. Реальный домен и VPS требуют отдельной проверки после предоставления окружения.

Правила опираются на документацию [файлового сервера Caddy](https://caddyserver.com/docs/caddyfile/directives/file_server), [обработки ошибок](https://caddyserver.com/docs/caddyfile/directives/handle_errors) и [официального образа Caddy](https://hub.docker.com/_/caddy).

## Проверено 29.10.2026

Dockerfile собран в установленном Podman; Compose разобран и запущен через доступный Docker Compose. В сети Caddy-контейнера проверены 9 страниц, 47 ресурсов, PDF, редиректы, HTTP 404 и кеш-заголовки. Подтверждены сборка со статьями, удаление их страниц при замене образа, откат и сохранение тома `/data`. Исходники оставлены с выключенными статьями. Проброс локального порта Podman в Windows не отвечал, поэтому доступ из Windows-браузера не подтверждён. Реальные VPS, DNS и HTTPS-сертификат домена не проверялись.
