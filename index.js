document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  hamburger.addEventListener('click', () => {
    // Toggle sidebar visibility
    sidebar.classList.toggle('translate-x-0');
    sidebar.classList.toggle('-translate-x-full');

    // Toggle hamburger animation
    const lines = hamburger.querySelectorAll('.line');
    lines[0].classList.toggle('rotate-45');
    lines[0].classList.toggle('translate-y-2');
    lines[1].classList.toggle('opacity-0');
    lines[2].classList.toggle('-rotate-45');
    lines[2].classList.toggle('-translate-y-2');
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (event) => {
    if (
      !sidebar.contains(event.target) &&
      !hamburger.contains(event.target) &&
      sidebar.classList.contains('translate-x-0')
    ) {
      sidebar.classList.remove('translate-x-0');
      sidebar.classList.add('-translate-x-full');
      const lines = hamburger.querySelectorAll('.line');
      lines[0].classList.remove('rotate-45', 'translate-y-2');
      lines[1].classList.remove('opacity-0');
      lines[2].classList.remove('-rotate-45', '-translate-y-2');
    }
  });
});