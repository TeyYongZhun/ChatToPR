# Backend

---

**Status:** active  **Date:** 2026-09-27

---

### 👤 User

I need to add a Next.js App Router API endpoint to handle the backend logic for ChatToPR. Please create app/api/triage/route.ts. This route should accept a POST request containing a mock Slack chat thread. For now, it should return a hardcoded JSON mock response simulating an IBM Bob 2.0 code patch (target file, commit message, and replacement code). Additionally, please install @octokit/rest and provide a boilerplate function inside the route to authenticate with GitHub using a Personal Access Token from the .env file.

---

### 🤖 Assistant

> 🔧 called: list_files, read_file

Let me first explore the project structure to understand what's already in place.

> 🔧 **list_files** — .

> 🔧 **read_file** — package.json

### 🤖 Assistant

> 🔧 called: list_files, read_file



> 🔧 **list_files** — src

> 🔧 **read_file** — tsconfig.json

### 🤖 Assistant

> 🔧 called: update_todo_list

Good. The project uses `src/app` as the App Router root. Now I'll install `@octokit/rest` and create the route file in parallel.

> 🔧 **update_todo_list** — [-] Install @octokit/rest
[ ] Create src/app/api/triage/route.ts with POST handler and GitHub boilerplate
[ ] Create .env.example documenting required env vars
[ ] Validate with TypeScript check


### 🤖 Assistant

> 🔧 called: execute_command



> 🔧 **execute_command** — npm install @octokit/rest

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Install @octokit/rest
[-] Create src/app/api/triage/route.ts with POST handler and GitHub boilerplate
[ ] Create .env.example documenting required env vars
[ ] Validate with TypeScript check


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — src/app/api/triage/route.ts

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Install @octokit/rest
[x] Create src/app/api/triage/route.ts with POST handler and GitHub boilerplate
[-] Create .env.example documenting required env vars
[ ] Validate with TypeScript check


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — .env.example

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Install @octokit/rest
[x] Create src/app/api/triage/route.ts with POST handler and GitHub boilerplate
[x] Create .env.example documenting required env vars
[-] Validate with TypeScript check


### 🤖 Assistant

> 🔧 called: execute_command



> 🔧 **execute_command** — npx tsc --noEmit

### 🤖 Assistant

> 🔧 called: update_todo_list

Zero TypeScript errors.

> 🔧 **update_todo_list** — [x] Install @octokit/rest
[x] Create src/app/api/triage/route.ts with POST handler and GitHub boilerplate
[x] Create .env.example documenting required env vars
[x] Validate with TypeScript check


### 🤖 Assistant

Everything is in place. Here's a summary of what was done:

---

### What was created

**[`src/app/api/triage/route.ts`](src/app/api/triage/route.ts)**

| Concern | Detail |
|---|---|
| **Method** | `POST /api/triage` (App Router `export async function POST`) |
| **Input** | JSON body `{ thread: SlackMessage[] }` — array of `{ user, text, ts }` |
| **Validation** | Returns `400` on bad JSON; `422` if `thread` is missing or empty |
| **Mock response** | `{ ok: true, patch: { targetFile, commitMessage, replacementCode } }` simulating an IBM Bob 2.0 patch suggestion |
| **GitHub auth** | [`getOctokit()`](src/app/api/triage/route.ts:38) reads `GITHUB_PAT` from the environment and returns a fully authenticated `Octokit` instance. Call it and uncomment the line inside `POST` when you're ready to open PRs |

**[`.env.example`](.env.example)** — documents the `GITHUB_PAT` variable (copy to `.env.local` to use).

---

### Example request / response

```bash
curl -X POST http://localhost:3000/api/triage \
  -H "Content-Type: application/json" \
  -d '{"thread":[{"user":"alice","text":"discount goes negative when coupon > price","ts":"1700000000.000100"}]}'
```

```json
{
  "ok": true,
  "patch": {
    "targetFile": "src/utils/calculateDiscount.ts",
    "commitMessage": "fix: prevent negative discount when coupon exceeds item price",
    "replacementCode": "export function calculateDiscount(...) { ... }"
  }
}
```

When you're ready to swap the mock for real IBM Bob 2.0 output, replace `MOCK_PATCH` with the AI response and call [`getOctokit()`](src/app/api/triage/route.ts:38) to open the pull request.