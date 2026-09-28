import Link from "next/link";

const extractSteps = [
  {
    title: "Paste the docs",
    body: "Drop README files, API notes, runbooks, or messy wiki pages. ReadableStack treats them as source material, not a prompt dump.",
  },
  {
    title: "Extract the structure",
    body: "The converter looks for schema hints, command examples, edge cases, and missing constraints so agents get instructions instead of prose.",
  },
  {
    title: "Ship a reviewable plan",
    body: "Each run produces a scored instruction pack you can open, compare, and send into an agent workflow.",
  },
];

const outputs = [
  { label: "Instruction pack", detail: "Ordered steps an agent can follow without guessing the author's intent." },
  { label: "Schema hints", detail: "Fields, types, and required values pulled from the original docs." },
  { label: "Command examples", detail: "Copy-ready calls and flags found in the source, kept next to the rule they belong to." },
  { label: "Confidence notes", detail: "What was explicit, what was inferred, and what still needs a human." },
];

export default function Home() {
  return (
    <div className="readable-home min-h-screen bg-[#f4efe3] text-[#1b1710]">
      <section className="relative overflow-hidden border-b border-[#1b1710]/10">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 12% 0%, rgba(232,163,23,0.28), transparent 34%), radial-gradient(circle at 88% 18%, rgba(47,92,74,0.12), transparent 32%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-[#1b1710]/15 bg-[#fffaf0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5a12]">
              Docs-to-agent conversion
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Turn messy docs into instructions an agent can actually run.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4a4336]">
              ReadableStack extracts schema hints, command examples, edge cases, and confidence notes from human docs so teams stop hand-rewriting the same runbook for every agent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/converter"
                className="rounded-full bg-[#e3a117] px-5 py-2.5 text-sm font-semibold text-[#1b1710] hover:bg-[#d0910e]"
              >
                Open converter
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-[#1b1710]/20 bg-white px-5 py-2.5 text-sm font-medium text-[#1b1710] hover:border-[#1b1710]/40"
              >
                View conversion runs
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.6rem] border border-[#1b1710]/12 bg-[#fffaf0] p-5 shadow-[0_24px_60px_rgba(80,50,10,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5a12]">Sample extraction</p>
            <h2 className="mt-2 font-serif text-2xl">From a README to a plan</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="rounded-2xl border border-dashed border-[#1b1710]/15 bg-[#f4efe3] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#7a7264]">Source</p>
                <p className="mt-2 leading-6 text-[#3d372d]">
                  “Auth is JWT. Rate limit 60/min. Retry on 429. Staging host is docs-only.”
                </p>
              </div>
              <div className="rounded-2xl border border-[#e3a117]/40 bg-[#fff4d4] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8a5a12]">Extracted</p>
                <ul className="mt-2 space-y-1 leading-6">
                  <li>auth.scheme = JWT</li>
                  <li>limits.requests_per_min = 60</li>
                  <li>retry.on = HTTP 429</li>
                  <li>env.staging.host = unlabeled — needs confirmation</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5a12]">How a run works</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">One converter. A reviewable instruction pack.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {extractSteps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-[#1b1710]/10 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8a5a12]">0{index + 1}</p>
              <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 leading-7 text-[#4a4336]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1b1710]/10 bg-[#fffaf0]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f5c4a]">What you keep</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">The useful bits of the docs, not another summary.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {outputs.map((item) => (
              <article key={item.label} className="rounded-3xl border border-[#1b1710]/10 bg-[#f4efe3] p-6">
                <h3 className="font-serif text-2xl">{item.label}</h3>
                <p className="mt-3 leading-7 text-[#4a4336]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5a12]">What a run looks like</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">A scored pack you can open, not a chat dump.</h2>
        <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-[#1b1710]/12 bg-white">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[#7a7264]">Run preview</p>
              <h3 className="mt-2 font-serif text-2xl">api-readme → instruction pack</h3>
              <ol className="mt-5 space-y-3 text-sm leading-6 text-[#3d372d]">
                <li>1. Authenticate with JWT before any write call.</li>
                <li>2. Enforce 60 requests per minute; back off on HTTP 429.</li>
                <li>3. Confirm the staging host — the source never labeled it.</li>
              </ol>
            </div>
            <aside className="border-t border-[#1b1710]/10 bg-[#fffaf0] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p className="text-xs uppercase tracking-[0.16em] text-[#8a5a12]">Review fields</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-[#7a7264]">Explicit rules</dt><dd>3</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-[#7a7264]">Inferred</dt><dd>1 — staging host</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-[#7a7264]">Needs a human</dt><dd>env.staging.host</dd></div>
              </dl>
              <p className="mt-5 text-xs leading-6 text-[#7a7264]">Sample extraction from the converter UI. Counts are from this document, not a usage dashboard.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-[2rem] border border-[#1b1710]/10 bg-[#1b1710] px-6 py-12 text-[#f4efe3] sm:px-10">
          <h2 className="font-serif text-3xl sm:text-4xl">Start with one messy document.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#d8d0c0]">
            The converter is the product. Open it, paste a doc, and inspect the structured run. No invented usage counts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/converter"
              className="rounded-full bg-[#e3a117] px-5 py-2.5 text-sm font-semibold text-[#1b1710]"
            >
              Convert a document
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-[#f4efe3]"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
