let a = document.querySelectorAll('.nav-item');
a.forEach(el => {
  if (
    '/' + el.firstElementChild.getAttribute('href') ===
    window.location.pathname
  ) {
    el.classList.add('nav-item-active');
  }
});
