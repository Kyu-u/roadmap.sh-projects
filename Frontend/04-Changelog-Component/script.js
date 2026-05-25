const toggle = document.getElementById('themeToggle');
const root   = document.documentElement;

const saved = localStorage.getItem('theme') || 'light';
applyTheme(saved);

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(theme) {
  root.dataset.theme       = theme;
  toggle.textContent       = theme === 'dark' ? '☀️' : '🌙';
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}