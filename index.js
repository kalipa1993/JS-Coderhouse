
/* Este es un juego en donde debes adivinar el número aleatorio que la maquina te da de manera automatica, tienes 5 intentos, luego de eso pierdes*/


let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));
let vidas = 5;

while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    if (numeroMaquina < numeroUser) {
        alert("Es más bajo");
    }
    else {
        alert("Es más alto");
    }
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
    if (vidas === 1) {
        alert("Lo siento, inténtalo de nuevo")
    }

}

if (numeroMaquina === numeroUser) {
    alert("GANASTE");
}