export default function PulseSpine({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 520"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Faint spine silhouette made of stacked vertebrae */}
      {Array.from({ length: 14 }).map((_, i) => (
        <ellipse
          key={i}
          cx={160 + Math.sin(i * 0.9) * 14}
          cy={30 + i * 34}
          rx="26"
          ry="13"
          className="fill-primary/10"
        />
      ))}
      {/* Central pulse line */}
      <path
        d="M0 460 H70 L95 380 L120 500 L145 300 L170 460 L195 420 L220 460 H320"
        stroke="#4B91AD"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1000"
        strokeDasharray="1000"
        className="animate-pulseLine"
      />
      <circle cx="220" cy="460" r="6" fill="#185A7A" className="animate-floatSlow" />
    </svg>
  );
}
