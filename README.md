# openclaw-test2

## Issue #17: OpenClaw Test 2 Fresh Task E

OpenClaw Test 2 Spec に沿って、Next.js latest / App Router / Tailwind CSS / Prisma / SQLite で個人用 Todo アプリを実装。

### Implemented

- todo 追加
- 完了切り替え
- 編集
- 削除
- filter
- sort
- SQLite + Prisma による永続化前提のデータモデル
- スマホ幅で崩れにくい UI
- auth なしの single-user 前提

### Files

- `package.json`
- `next.config.js`
- `postcss.config.js`
- `tailwind.config.js`
- `jsconfig.json`
- `.gitignore`
- `.env.example`
- `prisma/schema.prisma`
- `prisma/seed.js`
- `lib/prisma.js`
- `app/layout.js`
- `app/globals.css`
- `app/actions.js`
- `app/page.js`
- `components/TodoFilters.js`
- `components/TodoItem.js`

### Setup

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed.js
npm run dev
```

Initial repository setup for OpenClaw team workflow.
