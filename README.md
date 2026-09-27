# ChatToPR

> **Turn a Slack incident thread into a GitHub Pull Request — automatically.**

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Octokit](https://img.shields.io/badge/GitHub_API_(Octokit)-181717?style=flat-square&logo=github&logoColor=white)

---

## The Problem

When a production incident hits, engineers already know the fix — in the Slack thread. But translating that conversation into an actual Pull Request means switching tools, creating a branch, writing the fix, adding a test, and opening a PR. That's 10+ minutes of busywork while the incident clock is running.

> Developers spend only **16% of their workweek writing code**. The rest is swallowed by context-switching and tooling overhead. *([Atlassian State of DevEx](https://medium.com/@wextechblogs/let-developers-code-what-atlassians-state-of-devex-can-tell-us-about-using-ai-effectively-d0c5f0b10301))*

---

## What It Does

ChatToPR reads a Slack incident thread and does the rest automatically:

1. **Ingests the thread** — captures who said what and when.
2. **IBM Bob AI analyses it** — identifies the root cause and writes a targeted code patch + regression test.
3. **Opens a GitHub PR** — creates a branch, commits the fix, and raises a Pull Request ready for human review.

One button click. Real PR. No context switching.

---

## Key Features

- **One-click triage** — click "Trigger IBM Bob Agent" and watch the 5-step pipeline run live.
- **AI-generated patches** — hotfix code and a Jest regression test, written from the thread context.
- **Full GitHub automation** — branch creation, file commit, and PR opening via `@octokit/rest`.
- **Human review always required** — every fix lands as a PR, never auto-merged to `main`.
- **Secure by default** — PAT stored in `.env.local`, never committed; all agent actions are append-only.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router), React 18, Tailwind CSS |
| Backend | Next.js Serverless API Routes, TypeScript 5 |
| GitHub | `@octokit/rest` |
| AI Agent | IBM Bob |

---

## Local Setup

**Prerequisites:** Node.js 18+, a GitHub PAT with `repo` scope.

```bash
# 1. Clone
git clone https://github.com/TeyYongZhun/ChatToPR.git
cd ChatToPR

# 2. Install
npm install

# 3. Configure
cp .env.example .env.local
```

Edit `.env.local`:

```env
GITHUB_PAT=ghp_your_token_here
GITHUB_OWNER=TeyYongZhun
GITHUB_REPO=ChatToPR_sandbox
```

```bash
# 4. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), click **Trigger IBM Bob Agent**, and a real GitHub PR will be created.

---

## How the API Works

`POST /api/triage` takes a thread array and returns a PR URL.

```json
// Request
{ "thread": [{ "user": "Sarah", "text": "503s on /v2/orders", "ts": "1" }] }

// Response
{ "ok": true, "prUrl": "https://github.com/TeyYongZhun/ChatToPR_sandbox/pull/42" }
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main UI
│   └── api/triage/route.ts   # GitHub automation endpoint
└── components/
    └── SlackChat.tsx          # Chat UI + agent step runner
```

---

## Vision

ChatToPR was built for the IBM Bob Hackathon. The goal: eliminate the busywork between *"we know the fix"* and *"the fix is in review"*. Every action is auditable, reversible, and gated by human approval — the agent accelerates execution, engineers stay in control.

