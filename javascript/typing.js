var texto = "No puedo prometerte una mansion pero si prometo que de mi parte hare lo posible para tener un lugar donde estemos comodos, en paz, al que podamos llamarle hogar. Desde hace un tiempo, hemos querido empezar a viajar, es algo que me emociona mucho poder hacer juntos, se que eventalmente podremos y no solo nos conformaremos con ir algun estado cercano, sino a otro pais. No he pensado en tener una boda enorme, algo que nos guste a ambos y que estemos felices de como lo haremos. El simple hecho de poder unir nuestras vidas y compartirlo con nuestros seres queridos es lo que realmente importa, seria la meta mas grande e importante de nuestras vidas.";


// Velocidad de escritura (en milisegundos)
var velocidadEscritura = 50;

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
