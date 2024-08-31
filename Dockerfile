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
ENV NEXTAUTH_SECRET="vantoanvantoanvantoan"
ENV NEXTAUTH_URL="https://ventures.hvantoan.io.vn"
ENV DISCORD_CLIENT_ID="1263685207291334666"
ENV DISCORD_CLIENT_SECRET="_T0FJmMn5UDllcRdlQ6nCGIilkXOqMrR"
ENV GOOGLE_ID="521305244575-jfj3unj0nb5mpsr6k4vf4gcald1u82rm.apps.googleusercontent.com"
ENV GOOGLE_SECRET="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"
ENV API_ENDPOINT="https://ventures.dc.hvantoan.io.vn/"
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

##### RUNNER
FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXTAUTH_SECRET="vantoanvantoanvantoan" \
    NEXTAUTH_URL="https://ventures.hvantoan.io.vn/" \
    DISCORD_CLIENT_ID="1263685207291334666" \
    DISCORD_CLIENT_SECRET="_T0FJmMn5UDllcRdlQ6nCGIilkXOqMrR" \
    GOOGLE_ID="521305244575-jfj3unj0nb5mpsr6k4vf4gcald1u82rm.apps.googleusercontent.com" \
    GOOGLE_SECRET="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" \
    API_ENDPOINT="https://ventures.dc.hvantoan.io.vn" \
    NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

CMD ["server.js"]
