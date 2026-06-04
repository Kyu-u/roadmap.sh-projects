const popup = document.getElementById('cookieConsent');
const hidePopup = () => popup.classList.add('hidden');

// Show popup only if consent hasn't been given yet
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookieConsent')) popup.classList.remove('hidden');
});

document.getElementById('acceptCookies').addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'true');
  hidePopup();
});

document.getElementById('closeCookie').addEventListener('click', hidePopup);