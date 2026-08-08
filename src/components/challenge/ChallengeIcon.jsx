const paths = {
  arrowLeft: <><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>,
  flame: <path d="M12 22c4.2 0 7-3 7-7.1 0-3.1-1.8-5.8-4.5-7.2.1 2.2-.7 3.7-2.2 4.7.1-3.5-1.7-6.7-4.8-8.4.2 3.2-1.6 5.3-2.5 7.4C3.4 15.4 6.3 22 12 22Z" />,
  check: <path d="m5 12 4.2 4.2L19 6.5" />,
  code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
  linkedin: <><path d="M7 9v8" /><path d="M7 6v.01" /><path d="M11 17v-5a3 3 0 0 1 6 0v5" /><path d="M11 12V9" /></>,
  sparkle: <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />,
}

export default function ChallengeIcon({ name, className = 'h-5 w-5' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
