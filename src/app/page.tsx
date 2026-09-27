import SlackChat from "@/components/SlackChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      {/* ── Hero header ── */}
      <div className="w-full max-w-3xl mb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-slack-purple text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          IBM Bob Hackathon Demo
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Chat<span className="text-slack-purple">To</span>PR
        </h1>
        <p className="mt-2 text-gray-500 text-base max-w-lg mx-auto">
          Point IBM Bob at a Slack triage thread and watch it generate a hotfix
          patch and open a pull request — automatically.
        </p>
      </div>

      {/* ── Slack window chrome ── */}
      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl border border-gray-300 flex flex-col">
        {/* Title bar */}
        <div className="bg-slack-purple-dark flex items-center gap-2 px-4 py-2.5">
          {/* macOS-style traffic lights */}
          <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
          <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
          <span className="ml-3 text-white/70 text-xs font-medium">
            Slack — acme-corp
          </span>
        </div>

        {/* Two-column layout: sidebar + chat */}
        <div className="flex" style={{ height: "600px" }}>
          {/* Sidebar */}
          <aside className="w-56 flex-shrink-0 bg-slack-purple text-white/80 flex flex-col py-3 overflow-y-auto">
            <div className="px-3 mb-2">
              <p className="text-white font-bold text-sm truncate">acme-corp</p>
              <p className="text-white/50 text-xs mt-0.5">● Marcos Oliveira</p>
            </div>
            <div className="mt-2 px-3 space-y-0.5">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1 mt-2">
                Channels
              </p>
              {[
                "general",
                "engineering",
                "deployments",
                "incidents-production",
                "frontend",
                "backend",
                "alerts",
              ].map((ch) => (
                <div
                  key={ch}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-sm cursor-pointer transition-colors ${
                    ch === "incidents-production"
                      ? "bg-white/20 text-white font-semibold"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="text-white/50">#</span>
                  <span className="truncate">{ch}</span>
                  {ch === "incidents-production" && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-slack-red flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 px-3 space-y-0.5">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                Direct Messages
              </p>
              {["Sarah Chen", "Priya Nair"].map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded text-sm cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="truncate">{name}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Chat panel */}
          <div className="flex-1 flex flex-col overflow-hidden bg-white">
            <SlackChat />
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <p className="mt-8 text-xs text-gray-400">
        Built for the IBM Bob Hackathon · ChatToPR demo
      </p>
    </main>
  );
}
