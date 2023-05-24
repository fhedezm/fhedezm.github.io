//Side bar
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
//animacion iframe
const sp = this.document.querySelector("#spotify-embed");
abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click",() =>{
    nav.classList.remove("visible");
});
//animacion iframe
window.addEventListener('scroll', function() {
	// Obtener la posición de desplazamiento y la altura de la ventana    
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	// Obtener la altura total de la página
	var body = document.body;
	var html = document.documentElement;
	var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	
	// Comparar la posición de desplazamiento y la altura de la ventana con la altura total de la página
	if (scrollTop + windowHeight >= pageHeight) {
        sp.classList.remove("animate__bounceIn");        
        sp.classList.add("animate__bounceOut");
	}
    else 
    {        
        sp.classList.remove("animate__bounceOut");
        sp.classList.add("animate__bounceIn");
    }
});
//ANCLAR EL TITULO 
window.addEventListener("scroll", function() {
    var banners = document.querySelectorAll(".banner_cont");
    var subtitles = document.querySelectorAll(".subtitulo");
    var currentBanner = null;
    
    for (var i = 0; i < banners.length; i++) {
      var banner = banners[i];
      var subtitle = subtitles[i];
      
      var bannerRect = banner.getBoundingClientRect();
      
      if (bannerRect.top <= 0) {
        currentBanner = banner;
      }
    }

    for (var i = 0; i < subtitles.length; i++) {
      var subtitle = subtitles[i];
      
      if (subtitle.id === "subtitulo" + currentBanner.parentElement.classList[0].substr(6)) {
        subtitle.style.display = "block";
      } else {
        subtitle.style.display = "none";
      }
    }
  });