# Frontend_integration

---

**Status:** active  **Date:** 2026-09-27

---

### 👤 User

Please update the frontend component that renders the Slack agent execution results. Instead of displaying a hardcoded mock URL like [https://github.com/acme/order-service/pull/314](https://github.com/acme/order-service/pull/314), make it capture and display the actual html_url or pull request link returned dynamically in the JSON response from our backend API (/api/triage). Also, ensure the frontend calls fetch('/api/triage', { method: 'POST', body: JSON.stringify({ thread }) }) when the 'Trigger IBM Bob Agent' button is clicked, rather than running a simulated timeout.

---

### 🤖 Assistant

> 🔧 called: list_files

Let me explore the codebase first to understand the current structure.

> 🔧 **list_files** — .

### 🤖 Assistant

> 🔧 called: list_files



> 🔧 **list_files** — src

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — src/components/SlackChat.tsx

> 🔧 **read_file** — src/app/api/triage/route.ts

### 🤖 Assistant

> 🔧 called: apply_diff

Now I have a clear picture. The backend returns `{ ok: true, prUrl: pr.html_url }`. The frontend needs two changes:

1. Replace the hardcoded `prUrl` state + simulated `setTimeout` chain in `triggerAgent` with a real `fetch('/api/triage', ...)` call
2. Capture `prUrl` from the response JSON (`data.prUrl`) and display it instead of the hardcoded string

> 🔧 **apply_diff** — src/components/SlackChat.tsx

### 🤖 Assistant

> 🔧 called: apply_diff

Now update the render section to handle the `"error"` state and replace the hardcoded PR URL display with the dynamic `prUrl`:

> 🔧 **apply_diff** — src/components/SlackChat.tsx

### 🤖 Assistant

> 🔧 called: read_file

Now verify the final file looks correct end-to-end:

> 🔧 **read_file** — src/components/SlackChat.tsx

### 🤖 Assistant

> 🔧 called: execute_command

The file looks exactly right. Let me do a quick TypeScript type-check to confirm no compilation errors:

> 🔧 **execute_command** — npx tsc --noEmit 2>&1

### 🤖 Assistant

Clean — zero type errors. Here's a summary of every change made to [`SlackChat.tsx`](src/components/SlackChat.tsx):

---

### What changed and why

**State**
- Replaced `const [prUrl] = useState("https://github.com/acme/order-service/pull/314")` (hardcoded, read-only) with `const [prUrl, setPrUrl] = useState<string | null>(null)` so it can be populated from the API response.
- Added `const [errorMsg, setErrorMsg] = useState<string | null>(null)` to surface API failures to the user.
- Extended the `agentState` union type to include `"error"`.

**`triggerAgent` function** (line 157)
- Made `async` so `await fetch(...)` works naturally.
- Replaced the entire `setTimeout`-only simulation with a real `fetch('/api/triage', { method: 'POST', body: JSON.stringify({ thread }) })` call. The step-animation `setTimeout`s are kept as an optimistic UI overlay while the real request is in-flight, so the panel still feels lively during the API round-trip.
- On success: all steps are marked `"done"`, `prUrl` is set from `data.prUrl` (the `html_url` the backend already returns at line 126 of [`route.ts`](src/app/api/triage/route.ts)), and `agentState` → `"done"`.
- On failure: remaining steps are marked `"error"`, `errorMsg` is set, and `agentState` → `"error"`.

**Render**
- The PR link `<a>` now renders `prUrl` (the real GitHub URL) instead of the hardcoded mock string.
- Added a red error banner that shows `errorMsg` when the API call fails.
- Status indicator dot and header text now have a third `"error"` branch (red dot, "IBM Bob Agent — failed").