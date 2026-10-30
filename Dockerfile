FROM docker.io/library/node:24.12.0-bookworm-slim@sha256:7326fb2dbdce998edd72140946851be64ef4a643e8715e138ca467e8e9d92c99 AS build

WORKDIR /app
ENV NUXT_TELEMETRY_DISABLED=1
RUN npm install --global pnpm@12.6.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY nuxt.config.ts tsconfig.json ./
COPY app ./app
COPY server ./server
COPY public ./public
# Refresh aliases after copying the Nuxt config and app (postinstall ran earlier).
ARG NUXT_PUBLIC_YANDEX_METRICA_ID=""
ENV NUXT_PUBLIC_YANDEX_METRICA_ID=$NUXT_PUBLIC_YANDEX_METRICA_ID
RUN pnpm exec nuxt prepare && pnpm generate

FROM docker.io/library/caddy:2.11.7-alpine@sha256:eb4d35b7452d1ab6171fbdbe8d9275b2301dad6dad92115d91e19fb9b24d510f

ENV SITE_ADDRESS=jefrry.dev
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/.output/public /srv
