# Osmodian Arena

Backend-first monorepo scaffold for the Arena MVP of Osmodian.

## Stack

- Monorepo: pnpm workspaces + Turborepo
- Backend: NestJS + Fastify
- Frontend: React + TypeScript + Vite
- Database/Auth: Supabase
- ORM: Prisma
- Tests: Vitest + Playwright

## Workspace Layout

- `apps/api`: NestJS API
- `apps/web`: React/Vite frontend
- `packages/domain`: framework-agnostic domain logic
- `packages/contracts`: shared DTOs, schemas, route contracts
- `packages/config`: shared TypeScript and tooling config
- `packages/test-utils`: reusable test helpers
- `infra`: local/docker/deployment support files
- `docs/brain`: exported project notes placeholder

## First Goal

Get the workspace booting cleanly before implementing Arena rules.
