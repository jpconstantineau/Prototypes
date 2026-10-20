const body = document.body;
const toggleButton = document.querySelector('.theme-toggle');
const toggleLabel = document.querySelector('.theme-toggle__label');
const toggleIcon = document.querySelector('.theme-toggle__icon');

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('prototype-theme');
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme, persist = false) => {
  const isDark = theme === 'dark';
  body.classList.toggle('theme-dark', isDark);

  if (toggleLabel) {
    toggleLabel.textContent = isDark ? 'Light' : 'Dark';
  }

  if (toggleIcon) {
    toggleIcon.textContent = isDark ? '☀️' : '🌙';
  }

  if (persist) {
    localStorage.setItem('prototype-theme', theme);
  }
};

const toggleTheme = () => {
  const nextTheme = body.classList.contains('theme-dark') ? 'light' : 'dark';
  applyTheme(nextTheme, true);
};

applyTheme(getPreferredTheme());

if (toggleButton) {
  toggleButton.addEventListener('click', toggleTheme);
}
