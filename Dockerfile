##### DEPENDENCIES
FROM --platform=linux/amd64 node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm ci

##### BUILDER
FROM --platform=linux/amd64 node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Không cần đặt giá trị trực tiếp ở đây
ENV NEXTAUTH_SECRET=""
ENV NEXTAUTH_URL=""
ENV DISCORD_CLIENT_ID=""
ENV DISCORD_CLIENT_SECRET=""
ENV GOOGLE_ID=""
ENV GOOGLE_SECRET=""
ENV API_ENDPOINT=""
ENV NEXT_TELEMETRY_DISABLED=1

RUN SKIP_ENV_VALIDATION=1 npm run build

##### RUNNER
FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXTAUTH_SECRET="" \
    NEXTAUTH_URL="" \
    DISCORD_CLIENT_ID="" \
    DISCORD_CLIENT_SECRET="" \
    GOOGLE_ID="" \
    GOOGLE_SECRET="" \
    API_ENDPOINT="" \
    NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

CMD ["server.js"]
