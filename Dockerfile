##### DEPENDENCIES

FROM --platform=linux/amd64 node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install Prisma Client - remove if not using Prisma

# COPY prisma ./

# Install dependencies based on the preferred package manager

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml\* ./
RUN npm ci

##### BUILDER

FROM --platform=linux/amd64 node:20-alpine AS builder
# ARG DATABASE_URL
# ARG NEXT_PUBLIC_CLIENTVAR
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXTAUTH_SECRET="vantoanvantoanvantoan" \
    NEXTAUTH_URL="http://ventures.hvantoan.io.vn" \
    DISCORD_CLIENT_ID="1263685207291334666" \
    DISCORD_CLIENT_SECRET="_T0FJmMn5UDllcRdlQ6nCGIilkXOqMrR" \
    NEXT_PUBLIC_API_ENDPOINT="http://ventures-api.hvantoan.io.vn" \
    NEXT_TELEMETRY_DISABLED=1

RUN SKIP_ENV_VALIDATION=1 npm run build

##### RUNNER

FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXTAUTH_SECRET="vantoanvantoanvantoan" \
    NEXTAUTH_URL="http://ventures.hvantoan.io.vn" \
    DISCORD_CLIENT_ID="1263685207291334666" \
    DISCORD_CLIENT_SECRET="_T0FJmMn5UDllcRdlQ6nCGIilkXOqMrR" \
    NEXT_PUBLIC_API_ENDPOINT="http://ventures-api.hvantoan.io.vn" \
    NEXT_TELEMETRY_DISABLED=1
# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["server.js"]
