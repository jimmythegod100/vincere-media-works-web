/**
 * Optional analytics for Vincere Media Works.
 * Set integrations.gaMeasurementId in site-config.js (e.g. "G-XXXXXXXX") to enable GA4.
 */
(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg || !cfg.integrations) return;

  const id = (cfg.integrations.gaMeasurementId || '').trim();
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  if (id) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', id, { anonymize_ip: true });
  }

  window.VMW_TRACK = function (eventName, params) {
    try {
      if (typeof window.gtag === 'function' && id) {
        window.gtag('event', eventName, params || {});
      }
    } catch (_) { /* ignore */ }
  };
})();
