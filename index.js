const TEXT_DEL_JUGADOR_UNO = document.getElementById('nombreJugador1');
const TEXT_DEL_JUGADOR_DOS = document.getElementById('nombreJugador2');
const ITEMS_TRIQUI = document.querySelectorAll('.triqui__item');
const TURNO_MAXIMO = 9;
let turnoActual = 1;

class jugador {
   constructor(nombre, turno, rutaImg) {
      this.nombre = nombre;
      this.turno = turno;
      this.rutaImg = rutaImg;
   }
}
function crearJugadores(nombre) {
   const jugador1 = new jugador(nombre[0], 1, 'img/x.svg');
   const jugador2 = new jugador(nombre[1], 2, 'img/Circulo.svg');
   return [jugador1, jugador2];
}
function ponerNombres(nombreJugadorUno, nombreJugadorDos) {
   TEXT_DEL_JUGADOR_UNO.innerText = nombreJugadorUno;
   TEXT_DEL_JUGADOR_DOS.innerText = nombreJugadorDos;
}

function esTurnoDeJugadorUno(jugadorUno, item) {
   console.log('uno');
   if (item.value != true) {
      item.innerHTML = `<img src="${jugadorUno.rutaImg}" alt="logo" />`;
      turnoActual++;
   }
}

function esTurnoDeJugadorDos(jugadorDos, item) {
   console.log('dos');
   if (item.value != true) {
      item.innerHTML = `<img src="${jugadorDos.rutaImg}" alt="logo" />`;
      turnoActual++;
   }
}
function turno(turnoActual, jugadorUno, jugadorDos, item) {
   let turnoActualEsPar;
   console.log('s');
   if (turnoActual % 2 != 0) {
      turnoActualEsPar = false;
   } else {
      turnoActualEsPar = true;
   }
   if (!turnoActualEsPar) {
      esTurnoDeJugadorUno(jugadorUno, item);
   } else if (turnoActualEsPar) {
      esTurnoDeJugadorDos(jugadorDos, item);
   }
}
function tablero(jugadorUno, jugadorDos) {
   for (let element of ITEMS_TRIQUI) {
      element.addEventListener('click', () => {
         if (turnoActual <= TURNO_MAXIMO) {
            turno(turnoActual, jugadorUno, jugadorDos, element);
            element.value = true;
         }
         console.log(turnoActual);
      });
   }
}
function iniciarJuego(nombre) {
   const jugadores = crearJugadores(nombre);
   const jugadorUno = jugadores[0];
   const jugadorDos = jugadores[1];
   ponerNombres(jugadorUno.nombre, jugadorDos.nombre);
   tablero(jugadorUno, jugadorDos);
}
