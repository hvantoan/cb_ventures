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

# Set default values for environment variables
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG DISCORD_CLIENT_ID
ARG DISCORD_CLIENT_SECRET
ARG GOOGLE_ID
ARG GOOGLE_SECRET
ARG API_ENDPOINT
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET:-default_secret}
ENV NEXTAUTH_URL=${NEXTAUTH_URL:-http://localhost:3000}
ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID:-default_discord_id}
ENV DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET:-default_discord_secret}
ENV GOOGLE_ID=${GOOGLE_ID:-default_google_id}
ENV GOOGLE_SECRET=${GOOGLE_SECRET:-default_google_secret}
ENV API_ENDPOINT=${API_ENDPOINT:-http://localhost:8080}
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

##### RUNNER
FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV=production
# Set default values for environment variables in the runner stage
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET:-default_secret}
ENV NEXTAUTH_URL=${NEXTAUTH_URL:-http://localhost:3000}
ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID:-default_discord_id}
ENV DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET:-default_discord_secret}
ENV GOOGLE_ID=${GOOGLE_ID:-default_google_id}
ENV GOOGLE_SECRET=${GOOGLE_SECRET:-default_google_secret}
ENV API_ENDPOINT=${API_ENDPOINT:-http://localhost:8080}
ENV NEXT_TELEMETRY_DISABLED=1

# Copy necessary files to the runner stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
