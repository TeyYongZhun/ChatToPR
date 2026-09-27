# Backend_integration

---

**Status:** active  **Date:** 2026-09-27

---

### 👤 User

Please update app/api/triage/route.ts to replace the hardcoded mock behavior with actual GitHub integration using @octokit/rest. Use getOctokit() to authenticate. It should read the repository owner and name from process.env.GITHUB_OWNER and process.env.GITHUB_REPO (or fallback to owner: 'TeyYongZhun' and repo: 'ChatToPR_sandbox'). When a POST request is received, it should use Octokit to create a new branch, commit the replacement code to the target file (sample.txt), open a real GitHub Pull Request, and return the actual PR HTML URL in the JSON response.

---

### 🤖 Assistant

> 🔧 called: read_file, list_files

Let me start by reading the current file and exploring the project structure.

> 🔧 **list_files** — src

> 🔧 **read_file** — src/app/api/triage/route.ts

### 🤖 Assistant

> 🔧 called: read_file

Now let me check `package.json` to confirm the `@octokit/rest` dependency is present:

> 🔧 **read_file** — package.json

### 🤖 Assistant

> 🔧 called: apply_diff

Good. `@octokit/rest` is already installed. Now I have a clear picture of everything. Here's the plan:

1. Remove the mock patch constant
2. In `POST`, call `getOctokit()` and read owner/repo from env with fallbacks
3. Get the default branch SHA (to base the new branch on)
4. Create a new branch named `triage/<timestamp>`
5. Get the current blob SHA of `sample.txt` (needed for the update call)
6. Create/update `sample.txt` with `replacementCode` via `octokit.repos.createOrUpdateFileContents`
7. Open a PR from the new branch → default branch
8. Return `{ ok: true, prUrl: pr.html_url }`

> 🔧 **apply_diff** — src/app/api/triage/route.ts

### 🤖 Assistant

> 🔧 called: execute_command

Now verify it compiles cleanly:

> 🔧 **execute_command** — npx tsc --noEmit

### 🤖 Assistant

No TypeScript errors. Here's a summary of every change made to [`src/app/api/triage/route.ts`](src/app/api/triage/route.ts):

---

### What changed and why

**Removed**
- `PatchSuggestion` / `TriageResponse` interfaces — no longer needed; the response shape is now `{ ok, prUrl }`.
- `MOCK_PATCH` constant — replaced by real GitHub operations.

**Added — five sequential GitHub steps inside `POST`**

| Step | Octokit call | Purpose |
|---|---|---|
| 1 | [`octokit.repos.get`](src/app/api/triage/route.ts) + [`octokit.git.getRef`](src/app/api/triage/route.ts) | Resolve the default branch name and its tip commit SHA |
| 2 | [`octokit.git.createRef`](src/app/api/triage/route.ts) | Create a new branch `triage/<timestamp>` off that SHA |
| 3 | [`octokit.repos.getContent`](src/app/api/triage/route.ts) | Fetch the blob SHA of `sample.txt` (required by GitHub's contents API to update an existing file; silently skipped if the file doesn't exist yet) |
| 4 | [`octokit.repos.createOrUpdateFileContents`](src/app/api/triage/route.ts) | Commit the replacement content (base64-encoded) to `sample.txt` on the new branch |
| 5 | [`octokit.pulls.create`](src/app/api/triage/route.ts) | Open a PR from the new branch → default branch and return `pr.html_url` |

**Config**
- `owner` reads from `process.env.GITHUB_OWNER`, falling back to `"TeyYongZhun"`.
- `repo` reads from `process.env.GITHUB_REPO`, falling back to `"ChatToPR_sandbox"`.
- The whole GitHub block is wrapped in `try/catch` that returns `{ ok: false, error }` with a 500 if anything goes wrong.