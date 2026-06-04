document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const active = document.querySelector('.accordion-item.active');

    if (active && active !== item) active.classList.remove('active');
    item.classList.toggle('active');
  });
});