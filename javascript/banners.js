
const banner2 = document.querySelector('.cont2');
const banner3 = document.querySelector('.cont3');
const banner4 = document.querySelector('.cont4');
const banner5 = document.querySelector('.cont5');
const banner6 = document.querySelector('.cont6');
const banner7 = document.querySelector('.cont7');
const banner8 = document.querySelector('.cont8');

// Función para verificar qué banner está en la vista
function verificarBannerEnVista() {
  // Obtener la posición de la parte superior del viewport
  const viewportTop = window.pageYOffset || document.documentElement.scrollTop;
  // Obtener la posición de la parte inferior del viewport
  const viewportBottom = viewportTop + window.innerHeight;
  // Verificar si el banner está en la vista
  if (banner2.offsetTop >= viewportTop && banner2.offsetTop <= viewportBottom) {
    banner2.classList.add("animate__zoomInDown")
  }
  
  if (banner3.offsetTop >= viewportTop && banner3.offsetTop <= viewportBottom) {
    banner3.classList.add("animate__zoomIn")
  }
  
  if (banner4.offsetTop >= viewportTop && banner4.offsetTop <= viewportBottom) {
    banner4.classList.add("animate__zoomInDown")
  }
 
  if (banner5.offsetTop >= viewportTop && banner5.offsetTop <= viewportBottom) {
    banner5.classList.add("animate__zoomIn")
  }
  
  if (banner6.offsetTop >= viewportTop && banner6.offsetTop <= viewportBottom) {
    banner6.classList.add("animate__zoomInDown")
  }
  
  if (banner7.offsetTop >= viewportTop && banner7.offsetTop <= viewportBottom) {
    banner7.classList.add("animate__zoomIn")
  }
  
  if (banner8.offsetTop >= viewportTop && banner8.offsetTop <= viewportBottom) {
    banner8.classList.add("animate__zoomInDown")
  }
}

window.addEventListener('scroll', verificarBannerEnVista);