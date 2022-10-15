function aleatorio (min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado =  `Papel 📄`
    } else if (jugada == 2) {
        resultado = `Piedra 🥌`
    } else if (jugada == 3) {
        resultado = `Tijera ✂`
    } else {
        resultado = "Mal elegido"        
    } return resultado }

    let pc = 0;
    let jugador = 0;
    let triunfos = 0
    let perdidas = 0;
    

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3);
    jugador = prompt(`Elige un numero para jugar:
    1. Para papel
    2. Para Piedra
    3. Para Tijera`)

    alert('Tu has elegido ' + eleccion(jugador))
    alert('La Pc ha elegido ' + eleccion(pc))
    //Challenge

    if (pc == jugador) {
        alert(`Ha habido un empate`)
    } else if ((jugador == 1 && pc == 2) || (jugador == 2 && pc == 3) || (jugador == 3 && pc == 1) ) {
        alert(`Tu has ganado`)
        triunfos = triunfos + 1
    } else {
        alert(`Tu has perdido`)
        perdidas = perdidas + 1
    }
}

alert("Ganaste 😉" + triunfos + " veces. Perdiste 😥" + perdidas + " veces.")

