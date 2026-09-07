let trackingInstalled = false

export function trackEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined') return

  const payload = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined && value !== null && value !== ''),
  )

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...payload })
}

export function installAnalyticsTracking() {
  if (typeof document === 'undefined' || trackingInstalled) return
  trackingInstalled = true

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return

    const target = event.target.closest('[data-track-event]')
    if (!target) return

    trackEvent(target.dataset.trackEvent, {
      link_location: target.dataset.trackLocation,
      content_id: target.dataset.trackId,
      content_name: target.dataset.trackLabel || target.textContent?.trim().replace(/\s+/g, ' ').slice(0, 100),
      link_url: target instanceof HTMLAnchorElement ? target.href : undefined,
    })
  })
}
