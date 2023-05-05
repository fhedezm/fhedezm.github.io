const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const sp = this.document.querySelector("#spotify-embed");
abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click",() =>{
    nav.classList.remove("visible");
});
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
