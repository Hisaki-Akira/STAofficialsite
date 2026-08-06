document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('header .head').forEach((head) => {
    const nav = head.querySelector('nav');
    const reserve = nav?.querySelector('.reserve');
    if (!nav || !reserve) return;

    // Keep the booking CTA visible; the remaining links become the mobile menu.
    head.insertBefore(reserve, nav.nextSibling);
    nav.id = 'site-nav';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'menu-toggle';
    toggle.setAttribute('aria-label', 'メニューを開く');
    toggle.setAttribute('aria-controls', 'site-nav');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    head.appendChild(toggle);

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  });
});
