const TEXT_DEL_JUGADOR_UNO = document.getElementById('nombreJugador1');
const TEXT_DEL_JUGADOR_DOS = document.getElementById('nombreJugador2');

class jugador {
   constructor(nombre, id, rutaImg) {
      this.nombre = nombre;
      this.id = id;
      this.rutaImg = rutaImg;
   }
}
function crearJugadores(nombre) {
   const jugador1 = new jugador(nombre[0], 0, 'img/x.svg');
   const jugador2 = new jugador(nombre[1], 1, 'img/Circulo.svg');
   return [jugador1, jugador2];
}
function ponerNombres(nombreJugadorUno, nombreJugadorDos) {
   TEXT_DEL_JUGADOR_UNO.innerText = nombreJugadorUno;
   TEXT_DEL_JUGADOR_DOS.innerText = nombreJugadorDos;
}
function iniciarJuego(nombre) {
   const jugadores = crearJugadores(nombre);
   const jugadorUno = jugadores[0];
   const jugadorDos = jugadores[1];
   ponerNombres(jugadorUno.nombre, jugadorDos.nombre);
}
