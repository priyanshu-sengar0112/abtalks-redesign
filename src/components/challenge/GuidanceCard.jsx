export default function GuidanceCard({ guidance }) {
  return <section className="rounded-2xl border border-ab-track-ai/20 bg-ab-track-ai/5 p-5"><p className="text-sm font-bold text-purple-300">A quick way to start</p><ul className="mt-3 space-y-2 text-sm leading-5 text-ab-muted">{guidance.map((tip) => <li key={tip}>• {tip}</li>)}</ul></section>
}
