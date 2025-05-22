// START scroll-reveal helper
const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);   // animate once; comment out if you want repeat
      }
    });
  },
  { threshold: 0.15 } // fire when 15% of element is visible
);

// Observe all .reveal elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
// END scroll-reveal helper