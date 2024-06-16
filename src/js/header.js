const headerNavigation = document.querySelectorAll('.nav-item');
headerNavigation.forEach(el => {
  const hreflink = el.firstElementChild.getAttribute('href');
  console.log(window.location.pathname.split('/').pop().length);
  const pathName =
    window.location.pathname.split('/').pop().length === 0
      ? 'index.html'
      : window.location.pathname.split('/').pop();

  if (hreflink === pathName) {
    el.classList.add('nav-item-active');
  }
});
