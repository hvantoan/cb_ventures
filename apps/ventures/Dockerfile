ARG NODE_VERSION=18.17.0
FROM node:${NODE_VERSION}-alpine AS base
ENV PNPM_HOME="/pnpm" \
    PATH="$PNPM_HOME:$PATH" \
    NEXT_SHARP_PATH=/usr/local/lib/node_modules/sharp \
    NODE_OPTIONS="--max_old_space_size=4096"

RUN apk add --no-cache dumb-init
RUN corepack enable

ARG API_URL
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET
ARG APP_PATH=apps/ventures

FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install -r --frozen-lockfile
RUN npm install -g --arch=x64 --platform=linux --libc=musl sharp

ENV API_URL=${API_URL} \
    NEXTAUTH_URL=${NEXTAUTH_URL} \
    NEXTAUTH_SECRET=${NEXTAUTH_SECRET} \
    NEXT_TELEMETRY_DISABLED=1

RUN pnpm -F=ventures build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/${APP_PATH}/build/standalone ./
COPY --from=builder /app/${APP_PATH}/public ./${APP_PATH}/public
COPY --from=builder /app/${APP_PATH}/build/static ./${APP_PATH}/build/static
COPY --from=builder --chown=nextjs:nodejs /usr/local/lib/node_modules/sharp /usr/local/lib/node_modules/sharp
RUN chown -R nextjs:nodejs /app

ENV API_URL=${API_URL} \
    NEXTAUTH_URL=${NEXTAUTH_URL} \
    NEXTAUTH_SECRET=${NEXTAUTH_SECRET} \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

USER nextjs
EXPOSE 3000
CMD ["dumb-init", "node", "./apps/ventures/server.js"]
