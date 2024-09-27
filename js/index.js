let btnUp = document.getElementById('up');
btnUp.style.display = 'none';

window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
});

let btnRegresarArriba = document.getElementById('up');

let btnCopyRight = document.getElementById('copyRight');

btnCopyRight.innerHTML = `&copy; ${new Date().getFullYear()} Todos los derechos reservados`;