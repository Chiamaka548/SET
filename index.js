document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    // Hamburger menu toggle
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);
        if (!isClickInsideSidebar && !isClickInsideHamburger && sidebar.classList.contains('active')) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
});





// // Hamburger Menu Toggle
// const hamburger = document.getElementById('hamburger');
// const sidebar = document.getElementById('sidebar');
// const barTop = document.querySelector('.bar-top');
// const barMiddle = document.querySelector('.bar-middle');
// const barBottom = document.querySelector('.bar-bottom');

// hamburger.addEventListener('click', () => {
//     sidebar.classList.toggle('translate-x-0');
//     sidebar.classList.toggle('-translate-x-full');

// if (sidebar.classList.contains('translate-x-0')) {
//     barTop.classList.remove('translate-y-0', 'rotate-0');
//     barTop.classList.add('translate-y-2', 'rotate-45');
//     barMiddle.classList.add('opacity-0');
//     barBottom.classList.remove('translate-y-0', '-rotate-0');
//     barBottom.classList.add('-translate-y-2', '-rotate-45');
// } else {
//     barTop.classList.remove('translate-y-2', 'rotate-45');
//     barTop.classList.add('translate-y-0', 'rotate-0');
//     barMiddle.classList.remove('opacity-0');
//     barBottom.classList.remove('-translate-y-2', '-rotate-45');
//     barBottom.classList.add('translate-y-0', '-rotate-0');
// }
// });


// Activity Tabs Interactivity
// const tabs = document.querySelectorAll('#activity-tabs .tab');
// const bars = document.querySelectorAll('#activity-chart .activity-bar');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Reset all tabs to default color
//         tabs.forEach(t => t.classList.remove('text-blue-600'));
//         tab.classList.add('text-blue-600');

        // Simulate activity data change
        // const period = tab.dataset.period;
        // bars.forEach((bar, index) => {
        //     bar.classList.remove('bg-blue-500');
        //     bar.classList.add('bg-gray-200');
        //     if (period === 'day') {
        //         bar.classList.remove('h-16', 'h-24', 'h-32', 'h-48');
        //         bar.classList.add(`h-${16 + index * 8}`);
        //         if (index === 3) bar.classList.add('bg-blue-500');
        //     } else if (period === 'week') {
        //         bar.classList.remove('h-16', 'h-24', 'h-32', 'h-48');
        //         bar.classList.add(`h-${32 + index * 8}`);
        //         if (index === 4) bar.classList.add('bg-blue-500');
        //     } else if (period === 'month') {
        //         bar.classList.remove('h-16', 'h-24', 'h-32', 'h-48');
        //         bar.classList.add(`h-${48 + index * 8}`);
        //         if (index === 2) bar.classList.add('bg-blue-500');
        //     }
        // });
//     });
// });