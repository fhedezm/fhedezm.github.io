var texto = "No puedo prometerte una mansion pero si prometo que de mi parte hare lo posible para tener un lugar donde estemos comodos, en paz al que podamos llamarle hogar.";

// Velocidad de escritura (en milisegundos)
var velocidadEscritura = 70;

// Elemento donde se mostrará el texto
var elementoMaquinaEscribir = document.getElementById("maquina-de-escribir");

// Función para simular el efecto de máquina de escribir
function maquinaEscribir(texto, i) {
  if (i < texto.length) {
    elementoMaquinaEscribir.innerHTML += texto.charAt(i);
    i++;
    setTimeout(function() {
      maquinaEscribir(texto, i);
    }, velocidadEscritura);
  }
}

// Iniciar el efecto de máquina de escribir
maquinaEscribir(texto, 0);