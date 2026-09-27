import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SlackMessage {
  user: string;
  text: string;
  ts: string;
}

interface TriageRequestBody {
  thread: SlackMessage[];
}

interface PatchSuggestion {
  targetFile: string;
  commitMessage: string;
  replacementCode: string;
}

interface TriageResponse {
  ok: boolean;
  patch: PatchSuggestion;
}

// ---------------------------------------------------------------------------
// GitHub helper (boilerplate — wire up real logic when ready)
// ---------------------------------------------------------------------------

/**
 * Returns an authenticated Octokit instance using the Personal Access Token
 * stored in the GITHUB_PAT environment variable.
 *
 * Usage:
 *   const octokit = getOctokit();
 *   const { data } = await octokit.repos.get({ owner, repo });
 */
function getOctokit(): Octokit {
  const token = process.env.GITHUB_PAT;
  if (!token) {
    throw new Error(
      "GITHUB_PAT is not set. Add it to your .env.local file."
    );
  }
  return new Octokit({ auth: token });
}

// ---------------------------------------------------------------------------
// Hardcoded mock patch — replace with IBM Bob 2.0 integration later
// ---------------------------------------------------------------------------

const MOCK_PATCH: PatchSuggestion = {
  targetFile: "src/utils/calculateDiscount.ts",
  commitMessage:
    "fix: prevent negative discount when coupon exceeds item price",
  replacementCode: `export function calculateDiscount(
  itemPrice: number,
  couponValue: number
): number {
  if (couponValue >= itemPrice) {
    // Coupon covers full price — customer pays nothing, no negative total.
    return 0;
  }
  return itemPrice - couponValue;
}`,
};

// ---------------------------------------------------------------------------
// POST /api/triage
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: TriageRequestBody;

  try {
    body = (await req.json()) as TriageRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!Array.isArray(body?.thread) || body.thread.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Request body must contain a non-empty `thread` array." },
      { status: 422 }
    );
  }

  // `getOctokit()` is available here whenever you need to open a PR.
  // const octokit = getOctokit();

  const response: TriageResponse = { ok: true, patch: MOCK_PATCH };
  return NextResponse.json(response, { status: 200 });
}
