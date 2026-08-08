/**
 * Smooth scroll with header offset for anchor links.
 * Used on pages where native scroll-behavior isn't enough.
 */
export function scrollToSection(targetId, offset = 80) {
  const element = document.getElementById(targetId.replace('#', ''))
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

/**
 * Intersection Observer helper for scroll-triggered animations.
 */
export function observeElements(selector, className = 'is-visible') {
  const elements = document.querySelectorAll(selector)
  if (!elements.length) return () => {}

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  elements.forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}

/**
 * Track CTA clicks for analytics (placeholder hook).
 */
export function trackCTA(action, label) {
  if (typeof window !== 'undefined' && window.console) {
    console.debug('[ABTalks Analytics]', { action, label, timestamp: Date.now() })
  }
}
