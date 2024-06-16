let a = document.querySelectorAll('.nav-item');
a.forEach(el => {
  const hreflink = '/' + el.firstElementChild.getAttribute('href');
  console.log(hreflink);
  console.log(window.location.pathname);
  if (hreflink === window.location.pathname) {
    el.classList.add('nav-item-active');
  }
});
