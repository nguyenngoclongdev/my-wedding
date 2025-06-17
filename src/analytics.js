// window.gtag is defined globally by including the Google Analytics script in your HTML.
// Make sure to add the GA4 or Universal Analytics script in your index.html for this to work.
export function trackEvent(eventName, params = {}) {
  console.log('[trackEvent] called with:', eventName, params);
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    console.warn('Google Analytics (gtag) is not defined. Event not sent:', eventName, params);
  }
}
