(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  }, { passive: true });

  const form = document.querySelector('.contact-form');
  const serviceSelect = document.getElementById('service-select');

  function prefillService(value) {
    if (!serviceSelect || !value) return;
    const options = Array.from(serviceSelect.options);
    const match = options.find((opt) => opt.value === value || opt.textContent === value);
    if (match) {
      serviceSelect.value = match.value;
      return;
    }
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = value;
    serviceSelect.appendChild(opt);
    serviceSelect.value = value;
  }

  document.querySelectorAll('[data-service]').forEach((el) => {
    el.addEventListener('click', () => {
      prefillService(el.getAttribute('data-service'));
    });
  });

  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('service');
    if (fromQuery) prefillService(fromQuery);
  } catch (_) { /* ignore */ }

  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
