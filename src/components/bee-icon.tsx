export function BeeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
      <ellipse cx="12" cy="14.5" rx="4.5" ry="6" />
      <path d="M9.2 11.5h5.6M7.8 14.5h8.4M9 17.5h6" />
      <path d="M9.5 9.8C7.8 8 5 7.8 3.8 9.5s1 4.4 3.6 4.6M14.5 9.8c1.7-1.8 4.5-2 5.7-.3s-1 4.4-3.6 4.6" />
      <path d="M10.3 8.3c-1-1.4-2.4-2-4-1.8M13.7 8.3c1-1.4 2.4-2 4-1.8" />
    </svg>
  );
}
