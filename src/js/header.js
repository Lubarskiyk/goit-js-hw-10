let a = document.querySelectorAll('.nav-item');
a.forEach(el => {
  const hreflink = el.firstElementChild.getAttribute('href');
  const pathName = window.location.pathname.split('/').pop();

  console.log(pathName);
  console.log(el.firstElementChild.getAttribute('href'));
  if (hreflink === pathName) {
    el.classList.add('nav-item-active');
  }
});
