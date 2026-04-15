// Main JavaScript for Wellbeing Hub

// Active menu highlighting
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentPage = currentPath === '' ? 'index.html' : currentPath;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});

// Modal functionality (for index.html)
function initModal() {
  const openBtn = document.getElementById('openBooking');
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeBooking');

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
      modal.classList.remove('active');
    });

    window.addEventListener('click', function(e) {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// Initialize modal on page load
initModal();

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
  }
  darkModeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';

  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    darkModeToggle.textContent = isDark ? '🌞' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}