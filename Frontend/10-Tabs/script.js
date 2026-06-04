document.querySelector('.tab-links').addEventListener('click', e => {
  const btn = e.target.closest('.tab-link');
  if (!btn) return; // clicked the container gap, not a button

  document.querySelector('.tab-link.active').classList.remove('active');
  document.querySelector('.tab-content.active').classList.remove('active');

  btn.classList.add('active');
  document.getElementById(btn.dataset.tab).classList.add('active');
});