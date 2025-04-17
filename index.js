// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const barTop = document.querySelector('.bar-top');
const barMiddle = document.querySelector('.bar-middle');
const barBottom = document.querySelector('.bar-bottom');

hamburger.addEventListener('click', () => {
  // Toggle sidebar visibility
  sidebar.classList.toggle('translate-x-0');
  sidebar.classList.toggle('-translate-x-full');

  // Animate hamburger bars
  if (sidebar.classList.contains('translate-x-0')) {
    // Transform to "X"
    barTop.classList.remove('translate-y-0', 'rotate-0');
    barTop.classList.add('translate-y-2', 'rotate-45');
    barMiddle.classList.add('opacity-0');
    barBottom.classList.remove('translate-y-0', '-rotate-0');
    barBottom.classList.add('-translate-y-2', '-rotate-45');
  } else {
    // Revert to hamburger
    barTop.classList.remove('translate-y-2', 'rotate-45');
    barTop.classList.add('translate-y-0', 'rotate-0');
    barMiddle.classList.remove('opacity-0');
    barBottom.classList.remove('-translate-y-2', '-rotate-45');
    barBottom.classList.add('translate-y-0', '-rotate-0');
  }
});