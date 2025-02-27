FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN npm install --global corepack@latest && \ 
  corepack enable pnpm && \
  pnpm i --frozen-lockfile;

# Rebuild the source code only when needed
FROM base AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV SOCKETS_PORT 3000

# RUN npx prisma generate

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1002 socketio

USER socketio

EXPOSE 3000
CMD HOSTNAME="0.0.0.0" npx tsx server/server.ts
