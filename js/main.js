/* =========================================================
   DGMA Maritime Portal – Main JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSearch();
  initSmoothScroll();
  initHeaderScroll();
  initMarquee();
});

/* --- Scroll-triggered Animations --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '100px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* --- Search Overlay --- */
function initSearch() {
  const toggle = document.getElementById('searchToggle');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');

  if (!toggle || !overlay) return;

  toggle.addEventListener('click', () => {
    overlay.classList.add('active');
    setTimeout(() => input && input.focus(), 300);
  });

  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      overlay.classList.add('active');
      setTimeout(() => input && input.focus(), 300);
    }
  });

  closeBtn && closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });
}

/* --- Smooth Scroll for anchor links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* --- Header background on scroll --- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      header.style.background = 'rgba(13, 21, 39, 0.98)';
    } else {
      header.style.boxShadow = 'none';
      header.style.background = 'var(--clr-navy)';
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* --- Ensure marquee duplicates for seamless loop --- */
function initMarquee() {
  const marquee = document.querySelector('.banner-marquee');
  if (!marquee) return;

  // The marquee is already duplicated in HTML for seamless looping
  // Adjust animation speed based on content width
  const contentWidth = marquee.scrollWidth / 2;
  const speed = contentWidth / 60; // pixels per second
  marquee.style.animationDuration = speed + 's';
}
