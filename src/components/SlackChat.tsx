"use client";

import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface Message {
  id: string;
  author: string;
  avatar: string;         // initials
  avatarColor: string;    // tailwind bg class
  timestamp: string;
  text: string;
  isBot?: boolean;
  reactions?: { emoji: string; count: number }[];
}

interface AgentStep {
  id: string;
  label: string;
  status: "pending" | "running" | "done" | "error";
}

/* ─── Dummy triage thread ────────────────────────────────────────────────── */
const THREAD: Message[] = [
  {
    id: "1",
    author: "Sarah Chen",
    avatar: "SC",
    avatarColor: "bg-purple-500",
    timestamp: "10:14 AM",
    text: "Hey team 👋 — production API is returning 503s on `/v2/orders`. Started about 20 minutes ago. Ticket #4821.",
    reactions: [{ emoji: "👀", count: 4 }, { emoji: "🔥", count: 2 }],
  },
  {
    id: "2",
    author: "Marcos Oliveira",
    avatar: "MO",
    avatarColor: "bg-blue-500",
    timestamp: "10:16 AM",
    text: "Confirmed. Looks like the order-service pod is OOMKilled. I see a spike in memory after the 10:10 deploy.",
  },
  {
    id: "3",
    author: "Priya Nair",
    avatar: "PN",
    avatarColor: "bg-green-600",
    timestamp: "10:18 AM",
    text: "That deploy included the new pagination logic from PR #312. Memory usage wasn't flagged in staging because the dataset was too small.",
    reactions: [{ emoji: "💡", count: 3 }],
  },
  {
    id: "4",
    author: "Marcos Oliveira",
    avatar: "MO",
    avatarColor: "bg-blue-500",
    timestamp: "10:21 AM",
    text: "Root cause: the cursor-based pagination is loading entire result sets into memory instead of streaming. Fix is straightforward — swap `toArray()` for an async iterator in `OrderRepository.findAll()`.",
  },
  {
    id: "5",
    author: "Sarah Chen",
    avatar: "SC",
    avatarColor: "bg-purple-500",
    timestamp: "10:23 AM",
    text: "Rolling back #312 now to restore service. Marcos, can you open a hotfix PR with the streaming fix and add a load test so this doesn't slip through staging again?",
    reactions: [{ emoji: "✅", count: 5 }],
  },
  {
    id: "6",
    author: "Marcos Oliveira",
    avatar: "MO",
    avatarColor: "bg-blue-500",
    timestamp: "10:24 AM",
    text: "On it. Will target `main` with the fix + a Jest memory-leak test. Give me 30 min.",
    reactions: [{ emoji: "🚀", count: 3 }],
  },
];

const AGENT_STEPS_TEMPLATE: AgentStep[] = [
  { id: "s1", label: "Reading thread context…", status: "pending" },
  { id: "s2", label: "Identifying root cause & fix", status: "pending" },
  { id: "s3", label: "Building incident record (timeline, root cause, refs)", status: "pending" },
  { id: "s4", label: "Committing triage/INC-*.md to new branch", status: "pending" },
  { id: "s5", label: "Opening GitHub Pull Request", status: "pending" },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function Avatar({ initials, colorClass }: { initials: string; colorClass: string }) {
  return (
    <div
      className={`w-9 h-9 rounded-sm flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${colorClass}`}
    >
      {initials}
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  return (
    <div className="flex gap-3 px-4 py-1.5 hover:bg-gray-50 group">
      <Avatar initials={msg.avatar} colorClass={msg.avatarColor} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-gray-900 text-sm">{msg.author}</span>
          <span className="text-xs text-gray-400">{msg.timestamp}</span>
        </div>
        <p className="text-sm text-gray-800 leading-relaxed mt-0.5">{msg.text}</p>
        {msg.reactions && msg.reactions.length > 0 && (
          <div className="flex gap-1.5 mt-1.5">
            {msg.reactions.map((r) => (
              <span
                key={r.emoji}
                className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5 text-xs cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {r.emoji} <span className="text-gray-600 font-medium">{r.count}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AgentStepRow({ step }: { step: AgentStep }) {
  const icons: Record<AgentStep["status"], string> = {
    pending: "○",
    running: "◌",
    done: "✓",
    error: "✗",
  };
  const colors: Record<AgentStep["status"], string> = {
    pending: "text-gray-400",
    running: "text-yellow-500 animate-pulse",
    done: "text-green-600",
    error: "text-red-500",
  };
  return (
    <div className="flex items-center gap-2 text-sm py-1">
      <span className={`font-mono font-bold text-base ${colors[step.status]}`}>
        {icons[step.status]}
      </span>
      <span className={step.status === "done" ? "text-gray-700" : "text-gray-500"}>
        {step.label}
      </span>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function SlackChat() {
  const [agentState, setAgentState] = useState<"idle" | "running" | "done" | "error">("idle");
  const [steps, setSteps] = useState<AgentStep[]>(AGENT_STEPS_TEMPLATE.map((s) => ({ ...s })));
  const [prUrl, setPrUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function triggerAgent() {
    if (agentState !== "idle") return;
    setAgentState("running");
    setErrorMsg(null);
    setPrUrl(null);

    // Animate steps optimistically while the real API call is in-flight.
    const delays = [800, 1800, 3200, 4600, 6000];
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setSteps((prev) =>
          prev.map((s, i) => ({
            ...s,
            status: i === index ? "running" : i < index ? "done" : "pending",
          }))
        );
      }, delay);
    });

    try {
      const thread = THREAD.map((m) => ({ user: m.author, text: m.text, ts: m.timestamp }));
      const res = await fetch("/api/triage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ thread }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }

      // Mark all steps done and surface the real PR URL.
      setSteps((prev) => prev.map((s) => ({ ...s, status: "done" })));
      setPrUrl(data.prUrl ?? null);
      setAgentState("done");
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setSteps((prev) =>
        prev.map((s) => ({
          ...s,
          status: s.status === "running" || s.status === "pending" ? "error" : s.status,
        }))
      );
      setErrorMsg(msg);
      setAgentState("error");
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* ── Slack-style channel header ── */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-white">
        <span className="text-gray-500 font-medium text-lg">#</span>
        <span className="font-bold text-gray-900 text-sm">incidents-production</span>
        <span className="mx-2 text-gray-300">|</span>
        <span className="text-xs text-gray-500 truncate">
          🔴 Active incident — order-service OOMKilled after deploy #312
        </span>
      </div>

      {/* ── Thread messages ── */}
      <div className="flex-1 overflow-y-auto py-3 bg-white">
        <div className="px-4 pb-3">
          <p className="text-xs text-gray-400 text-center border-b border-gray-100 pb-2 mb-3">
            Today
          </p>
        </div>
        {THREAD.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))}
      </div>

      {/* ── Trigger panel ── */}
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-4">
        {agentState === "idle" && (
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 max-w-sm">
              IBM Bob Agent will read this thread, create a structured incident record, and open a pull request automatically.
            </p>
            <button
              onClick={triggerAgent}
              className="flex items-center gap-2 bg-slack-purple hover:bg-slack-aubergine active:scale-95 text-white font-semibold text-sm px-5 py-2.5 rounded-md shadow transition-all duration-150 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Trigger IBM Bob Agent
            </button>
          </div>
        )}

        {(agentState === "running" || agentState === "done" || agentState === "error") && (
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-600 mb-2 flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  agentState === "running"
                    ? "bg-yellow-400 animate-pulse"
                    : agentState === "error"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              />
              {agentState === "running"
                ? "IBM Bob Agent is working…"
                : agentState === "error"
                ? "IBM Bob Agent — failed"
                : "IBM Bob Agent — done"}
            </p>
            {steps.map((step) => (
              <AgentStepRow key={step.id} step={step} />
            ))}
            {agentState === "done" && prUrl && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-xs font-semibold text-green-800 mb-1">✅ Pull request opened successfully</p>
                <a
                  href={prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline break-all"
                >
                  {prUrl}
                </a>
              </div>
            )}
            {agentState === "error" && errorMsg && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-xs font-semibold text-red-800 mb-1">❌ Agent encountered an error</p>
                <p className="text-xs text-red-700 break-all">{errorMsg}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
