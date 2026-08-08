const paths = {
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
  flame: <path d="M12 22c4.2 0 7-3 7-7.1 0-3.1-1.8-5.8-4.5-7.2.1 2.2-.7 3.7-2.2 4.7.1-3.5-1.7-6.7-4.8-8.4.2 3.2-1.6 5.3-2.5 7.4C3.4 15.4 6.3 22 12 22Z" />,
  check: <path d="m5 12 4.2 4.2L19 6.5" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  trophy: <><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v6a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a4 4 0 0 0 4 4" /><path d="M17 6h3v1a4 4 0 0 1-4 4" /></>,
  medal: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12.5-2 8 5.5-2.5 5.5 2.5-2-8" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
}

export default function DashboardIcon({ name, className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
