export default function Loading() {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-cream">
      <div className="flex flex-col items-center gap-5">
        <svg width="56" height="64" viewBox="0 0 56 64" aria-hidden="true">
          <path
            d="M28 2l22.5 13v34L28 62 5.5 49V15L28 2z"
            fill="none"
            stroke="#d99a1f"
            strokeWidth="2.5"
            strokeDasharray="150"
            strokeDashoffset="150"
          >
            <animate attributeName="stroke-dashoffset" from="150" to="0" dur="1.2s" fill="freeze" />
            <animate attributeName="stroke-dashoffset" from="0" to="-150" dur="1.2s" begin="1.2s" repeatCount="indefinite" />
          </path>
        </svg>
        <p className="eyebrow text-stone-warm">Loading</p>
      </div>
    </div>
  );
}
