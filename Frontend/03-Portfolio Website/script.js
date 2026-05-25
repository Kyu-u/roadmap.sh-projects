const DARK = 'dark';
const LIGHT = 'light';
const THEME_KEY = 'theme';
const DEFAULT_THEME = DARK;

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY);
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function getOppositeTheme(theme) {
  return theme === DARK ? LIGHT : DARK;
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  updateIcons(theme);
  saveTheme(theme);
}

function updateIcons(theme) {
  const isDark = theme === DARK;
  document.getElementById('sun_icon').style.display = isDark ? 'block' : 'none';
  document.getElementById('moon_icon').style.display = isDark ? 'none' : 'block';
}

function toggleTheme() {
  const current = getSavedTheme();
  applyTheme(getOppositeTheme(current));
}
