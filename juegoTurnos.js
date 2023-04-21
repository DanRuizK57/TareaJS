let personaje1 = { nombre: "Personaje 1", vidaMaxima: 100, vidaActual: 100, dano: 20 };

let personaje2 = { nombre: "Personaje 2", vidaMaxima: 80, vidaActual: 80, dano: 10 };

let terminoJuego = false;

function mostrarVidas() {
    console.log(`${personaje1.nombre} - ${personaje1.vidaActual}/${personaje1.vidaMaxima}`);
    console.log(`${personaje2.nombre} - ${personaje2.vidaActual}/${personaje2.vidaMaxima}`);
}

function ataqueP1() {
    mostrarVidas();
    if (personaje1.vidaActual && personaje2.vidaActual > 0) {
        personaje2.vidaActual -= personaje1.dano
        console.log(`${personaje1.nombre} atacó y le hizo ${personaje1.dano} de daño a ${personaje2.nombre}`)
    }
}

function ataqueP2() {
    mostrarVidas();
    if (personaje1.vidaActual && personaje2.vidaActual > 0) {
        personaje1.vidaActual -= personaje2.dano
        console.log(`${personaje2.nombre} atacó y le hizo ${personaje2.dano} de daño a ${personaje1.nombre}`)
    }
}

function anunciarGanador() {
    if (personaje1.vidaActual <= 0) {
        console.log(`Gana ${personaje2.nombre}! :D`)
    } else if (personaje2.vidaActual <= 0) {
        console.log(`Gana ${personaje1.nombre}! :D`)
    }
}

function terminarJuego() {
    if (personaje1.vidaActual <= 0 || personaje2.vidaActual <= 0) {
        return true;
    }
}

while (!terminarJuego()) {
    ataqueP1();
    ataqueP2();

    if (terminarJuego()) {
        anunciarGanador();
        console.log("Fin del combate.");
    }

}





