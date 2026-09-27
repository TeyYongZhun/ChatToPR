import SlackChat from "@/components/SlackChat";

/* ─── Navigation Bar ──────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm tracking-tight">
            Chat<span className="text-purple-400">To</span>PR
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/50">
          <a href="#problem" className="hover:text-white/80 transition-colors">Problem</a>
          <a href="#demo"    className="hover:text-white/80 transition-colors">Live Demo</a>
          <a href="#features" className="hover:text-white/80 transition-colors">Features</a>
        </div>

        {/* CTA */}
        <a
          href="#demo"
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/8 hover:bg-white/12 border border-white/10 text-white/80 hover:text-white transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          See it live
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero Section ────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 badge-shimmer text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 shadow-lg shadow-purple-900/30">
          <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
          IBM Bob Hackathon · Live Demo
          <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
          From Slack Thread
          <br />
          <span className="gradient-text">to Merged PR</span>
          <br />
          in Seconds.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          ChatToPR connects IBM Bob AI to your incident channels. Point it at a triage thread
          and watch it analyze, patch, and open a pull request — no context-switching required.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-purple-900/40 transition-all active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Try the Live Demo
          </a>
          <a
            href="https://github.com/TeyYongZhun/ChatToPR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.01-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.93 10.93 0 0 1 12 6.7c.97 0 1.95.13 2.87.39 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.66.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55C20.71 21.4 24 17.09 24 12 24 5.65 18.85.5 12 .5z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-white/25">
          <span>Slack Integration</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>IBM Bob AI</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>GitHub Automation</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Zero Boilerplate</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Problem Statement Section ──────────────────────────────────────────── */
function ProblemStatement() {
  const pains = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m4-2a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
      title: "Hours Lost to Context-Switching",
      body: "Engineers toggle between Slack, GitHub, and local IDEs to piece together incident context — each switch bleeds momentum and delays the fix.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Tribal Knowledge Bottlenecks",
      body: "The fix often lives in a Slack thread that will be archived and forgotten. Without automation, critical debugging context never makes it into the codebase.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Manual PR Overhead",
      body: "Writing the patch, adding regression tests, and composing a well-described PR while production is down is cognitive overload on your best engineers.",
    },
  ];

  return (
    <section id="problem" className="relative py-24 px-6">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-purple-500/30" />

      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400/80">The Problem</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 leading-tight">
          Your engineers are firefighters, not feature builders.
        </h2>
        <p className="text-white/45 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          When production goes down, the entire resolution workflow lives across three disconnected tools.
          Every minute your team spends triaging manually is a minute not spent on your product.
        </p>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {pains.map((pain) => (
            <div key={pain.title} className="glass-card rounded-2xl p-6 feature-card">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                {pain.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{pain.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{pain.body}</p>
            </div>
          ))}
        </div>

        {/* Bridge: how ChatToPR solves it */}
        <div className="relative glass-card rounded-3xl p-8 md:p-10 border border-purple-500/20 overflow-hidden">
          {/* Background glow blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Left: problem flow */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Before ChatToPR</p>
              <div className="flex flex-col gap-2">
                {[
                  { icon: "💬", label: "Incident reported in Slack" },
                  { icon: "🔍", label: "Engineer reads thread, switches to GitHub" },
                  { icon: "💻", label: "Clones repo, writes patch locally" },
                  { icon: "🧪", label: "Writes test, pushes branch manually" },
                  { icon: "📬", label: "Opens PR, writes description by hand" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-base">{step.icon}</span>
                    <span className="text-white/50 text-sm">{step.label}</span>
                    {i < 4 && (
                      <svg className="w-3 h-3 text-white/20 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/50">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-purple-400 whitespace-nowrap">ChatToPR</span>
            </div>

            {/* Right: with ChatToPR */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400/70 mb-4">After ChatToPR</p>
              <div className="flex flex-col gap-2">
                {[
                  { icon: "💬", label: "Incident reported in Slack" },
                  { icon: "⚡", label: "IBM Bob reads the thread instantly" },
                  { icon: "🤖", label: "AI generates patch + regression test" },
                  { icon: "✅", label: "PR opened with full context — automatically" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-base">{step.icon}</span>
                    <span className={i === 3 ? "text-green-300 text-sm font-medium" : "text-white/60 text-sm"}>{step.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-lg px-3 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-300">~45 minutes saved per incident</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Demo Window Section ─────────────────────────────────────────────────── */
function DemoSection() {
  return (
    <section id="demo" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400/80">Interactive Demo</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 leading-tight">
          Watch IBM Bob Agent work in real time.
        </h2>
        <p className="text-white/45 text-center max-w-xl mx-auto mb-12 leading-relaxed">
          A real production incident thread. One click. A hotfix PR opened on GitHub — completely automated.
        </p>

        {/* macOS-style glassmorphism window */}
        <div className="glow-ring rounded-2xl overflow-hidden glass-card">
          {/* Window title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "rgba(29,7,30,0.95)" }}
          >
            <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 bg-white/[0.07] border border-white/[0.09] rounded-md px-3 py-0.5 text-xs text-white/40">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                acme-corp.slack.com — #incidents-production
              </div>
            </div>
          </div>

          {/* Slack window content */}
          <div className="flex" style={{ height: "580px" }}>
            {/* Sidebar */}
            <aside
              className="w-56 flex-shrink-0 flex flex-col py-3 overflow-y-auto"
              style={{ background: "#3f0e40" }}
            >
              <div className="px-3 mb-3">
                <p className="text-white font-bold text-sm truncate">acme-corp</p>
                <p className="text-white/40 text-xs mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Marcos Oliveira
                </p>
              </div>
              <div className="px-3 space-y-0.5">
                <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-1.5 mt-2">
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
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-white/40 text-xs">#</span>
                    <span className="truncate text-xs">{ch}</span>
                    {ch === "incidents-production" && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-red-400 flex-shrink-0 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 px-3 space-y-0.5">
                <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-1.5">
                  Direct Messages
                </p>
                {["Sarah Chen", "Priya Nair"].map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded text-xs cursor-pointer hover:bg-white/10 hover:text-white text-white/60 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="truncate">{name}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Chat panel — white background to preserve SlackChat design */}
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              <SlackChat />
            </div>
          </div>
        </div>

        {/* Callout below demo */}
        <p className="mt-5 text-center text-xs text-white/25">
          Powered by{" "}
          <span className="text-purple-400/70 font-medium">IBM Bob AI</span>{" "}
          · Connects to your real Slack workspace & GitHub repository
        </p>
      </div>
    </section>
  );
}

/* ─── Features & Architecture Grid ───────────────────────────────────────── */
function FeaturesGrid() {
  const features = [
    {
      accent: "purple",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Real-Time Slack Triage",
      tag: "Input Layer",
      description:
        "ChatToPR listens to your incident channels and ingests the full conversation thread — usernames, timestamps, code snippets, and ticket references — giving IBM Bob complete context before it writes a single line.",
      bullets: [
        "Full thread context ingestion",
        "Reaction & mention awareness",
        "Ticket & PR cross-referencing",
      ],
      gradient: "from-purple-600/20 to-purple-800/5",
      border: "border-purple-500/15",
      tagColor: "bg-purple-500/15 text-purple-300 border-purple-500/25",
      iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    },
    {
      accent: "indigo",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
        </svg>
      ),
      title: "AI Code Generation",
      tag: "Core Engine",
      description:
        "IBM Bob analyzes the thread, identifies the root cause, and synthesizes a production-ready patch with a regression test — all tailored to the exact file, function, and failure mode described by your team.",
      bullets: [
        "Root cause analysis from natural language",
        "Context-aware patch generation",
        "Automated Jest / unit test authoring",
      ],
      gradient: "from-indigo-600/20 to-indigo-800/5",
      border: "border-indigo-500/15",
      tagColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
      iconBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    },
    {
      accent: "sky",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Automated GitHub PRs",
      tag: "Output Layer",
      description:
        "The generated fix is committed to a new branch and a descriptive pull request is opened automatically — complete with a summary, affected files, and a link back to the Slack thread for full traceability.",
      bullets: [
        "Branch creation & commit automation",
        "PR description with thread context",
        "Full Slack ↔ GitHub traceability",
      ],
      gradient: "from-sky-600/20 to-sky-800/5",
      border: "border-sky-500/15",
      tagColor: "bg-sky-500/15 text-sky-300 border-sky-500/25",
      iconBg: "bg-sky-500/10 border-sky-500/20 text-sky-300",
    },
  ];

  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400/80">Features & Architecture</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 leading-tight">
          Three layers. One seamless pipeline.
        </h2>
        <p className="text-white/45 text-center max-w-xl mx-auto mb-14 leading-relaxed">
          ChatToPR is an end-to-end automation pipeline that maps directly to your existing incident response workflow.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`relative rounded-2xl p-6 glass-card feature-card border ${f.border} overflow-hidden`}
            >
              {/* Gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} pointer-events-none rounded-2xl`} />

              <div className="relative z-10">
                {/* Tag */}
                <span className={`inline-flex items-center text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-4 ${f.tagColor}`}>
                  {f.tag}
                </span>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${f.iconBg}`}>
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed mb-5">{f.description}</p>

                {/* Bullets */}
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-white/55">
                      <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture flow strip */}
        <div className="mt-10 glass-card rounded-2xl p-5 border border-white/[0.07]">
          <p className="text-xs text-white/30 uppercase tracking-widest text-center mb-4">End-to-end flow</p>
          <div className="flex items-center justify-center flex-wrap gap-0">
            {[
              { label: "Slack Thread", sub: "Incident channel" },
              null,
              { label: "IBM Bob Agent", sub: "AI analysis + codegen" },
              null,
              { label: "Hotfix Patch", sub: "Generated code + test" },
              null,
              { label: "GitHub PR", sub: "Auto-opened + described" },
            ].map((item, i) =>
              item === null ? (
                <svg key={i} className="w-5 h-5 text-white/15 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <div key={item.label} className="flex flex-col items-center px-4 py-2">
                  <span className="text-white/75 text-sm font-semibold">{item.label}</span>
                  <span className="text-white/30 text-xs mt-0.5">{item.sub}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white/50 text-sm font-semibold">
            Chat<span className="text-purple-400">To</span>PR
          </span>
        </div>
        <p className="text-xs text-white/25 text-center">
          Built for the IBM Bob Hackathon · Automate incident response from Slack to GitHub
        </p>
        <p className="text-xs text-white/20">
          Powered by <span className="text-white/35">IBM Bob AI</span>
        </p>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-mesh min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <DemoSection />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
}
