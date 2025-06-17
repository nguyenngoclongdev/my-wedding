// window.gtag is defined globally by including the Google Analytics script in your HTML.
// Make sure to add the GA4 or Universal Analytics script in your index.html for this to work.
export function trackEvent(eventName, params = {}) {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
}
