/* const navbar = document.getElementsByTagName('nav');
console.log(navbar);

navbar.addEventListener('scroll', () => {
    console.log(parseInt(navbar.style.top));
    if (parseInt(navbar.style.top)>= -100) {
        navbar.style.top = 0;
        navbar.style.position = "fixed";
    }
}) */


const dlmodeBtn = document.getElementById('dlmodeBtn');
dlmodeBtn.addEventListener('click', () => {
  const body = document.querySelector('body');
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme == null || currentTheme === 'light') {
    body.setAttribute('data-theme', 'dark');
    console.log(body.dataset.theme);
  } else {
    body.setAttribute('data-theme', 'light');
  }
});







