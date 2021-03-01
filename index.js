const TEXT_DEL_JUGADOR_UNO = document.getElementById('nombreJugador1');
const TEXT_DEL_JUGADOR_DOS = document.getElementById('nombreJugador2');
const TEXT_MARCADOR = document.getElementById('marcador');

const INDICADOR_JUGADOR_UNO = document.getElementById('indicadorJugadorUno');
const INDICADOR_JUGADOR_DOS = document.getElementById('indicadorJugadorDos');

const UNO = document.getElementById('1');
const DOS = document.getElementById('2');
const TRES = document.getElementById('3');

const CUATRO = document.getElementById('4');
const CINCO = document.getElementById('5');
const SEIS = document.getElementById('6');

const SIETE = document.getElementById('7');
const OCHO = document.getElementById('8');
const NUEVE = document.getElementById('9');

const ITEMS_TRIQUI = document.querySelectorAll('.triqui__item');
const TURNO_MAXIMO = 9;
let turnoActual = 1;
let marcadorJugadorUno = 0;
let marcadorJugadorDos = 0;
let alguienGano = false;

class jugador {
   constructor(nombre, turno, id, rutaImg) {
      this.nombre = nombre;
      this.turno = turno;
      this.id = id;
      this.rutaImg = rutaImg;
   }
}
function crearJugadores(nombre) {
   const jugador1 = new jugador(nombre[0], 1, 'uno', 'img/x.svg');
   const jugador2 = new jugador(nombre[1], 2, 'dos', 'img/Circulo.svg');
   return [jugador1, jugador2];
}
function ponerNombres(nombreJugadorUno, nombreJugadorDos) {
   TEXT_DEL_JUGADOR_UNO.innerText = nombreJugadorUno;
   TEXT_DEL_JUGADOR_DOS.innerText = nombreJugadorDos;
}

function verificar(jugador) {
   if (UNO.classList.contains(jugador.id) && DOS.classList.contains(jugador.id) && TRES.classList.contains(jugador.id)) {
      gano(jugador, UNO, DOS, TRES);
      return true;
   } else if (CUATRO.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && SEIS.classList.contains(jugador.id)) {
      gano(jugador, CUATRO, CINCO, SEIS);
      return true;
   } else if (SIETE.classList.contains(jugador.id) && OCHO.classList.contains(jugador.id) && NUEVE.classList.contains(jugador.id)) {
      gano(jugador, SIETE, OCHO, NUEVE);
      return true;
   }

   if (UNO.classList.contains(jugador.id) && CUATRO.classList.contains(jugador.id) && SIETE.classList.contains(jugador.id)) {
      gano(jugador, UNO, CUATRO, SIETE);
      return true;
   } else if (DOS.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && OCHO.classList.contains(jugador.id)) {
      gano(jugador, DOS, CINCO, OCHO);
      return true;
   } else if (TRES.classList.contains(jugador.id) && SEIS.classList.contains(jugador.id) && NUEVE.classList.contains(jugador.id)) {
      gano(jugador, TRES, SEIS, NUEVE);
      return true;
   }
   if (UNO.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && NUEVE.classList.contains(jugador.id)) {
      gano(jugador, UNO, CINCO, NUEVE);
      return true;
   } else if (TRES.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && SIETE.classList.contains(jugador.id)) {
      gano(jugador, TRES, CINCO, SIETE);
      return true;
   }
   if (turnoActual == TURNO_MAXIMO + 1) {
      empate();
   }
   return false;
}

function nuevoJuego(item1, item2, item3) {
   for (let element of ITEMS_TRIQUI) {
      element.value = false;
      element.classList.remove('uno');
      element.classList.remove('dos');
      element.innerHTML = '';
   }
   item1.classList.remove('mostrar');
   item2.classList.remove('mostrar');
   item3.classList.remove('mostrar');
   INDICADOR_JUGADOR_UNO.classList.remove('oculto');
   INDICADOR_JUGADOR_DOS.classList.add('oculto');
   turnoActual = 1;
   alguienGano = false;
}
function gano(quienGano, item1, item2, item3) {
   if (quienGano.id == 'uno') {
      marcadorJugadorUno += 1;
   }
   if (quienGano.id == 'dos') {
      marcadorJugadorDos += 1;
   }
   marcador.innerText = `${marcadorJugadorUno} - ${marcadorJugadorDos}`;
   item1.classList.add('mostrar');
   item2.classList.add('mostrar');
   item3.classList.add('mostrar');
   setTimeout(() => {
      Swal.fire({
         icon: 'success',
         title: 'Muy Bien',
         text: `${quienGano.nombre} gano esta partida de triqui`,
         confirmButtonColor: '#3085d6',
         confirmButtonText: 'Nuevo Juego',
      }).then(() => {
         nuevoJuego(item1, item2, item3);
      });
   }, 1000);
}
function empate() {
   Swal.fire({
      icon: 'info',
      title: 'Opss!',
      text: `Esta partida ha quedado en EMPATE`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Nuevo Juego',
   }).then(() => {
      nuevoJuego();
   });
}
function esTurnoDeJugadorUno(jugadorUno, item) {
   if (item.value != true) {
      if (!alguienGano) {
         item.innerHTML = `<img src="${jugadorUno.rutaImg}" alt="logo" />`;
         turnoActual++;
         item.classList.add(jugadorUno.id);
         alguienGano = verificar(jugadorUno);
         INDICADOR_JUGADOR_DOS.classList.remove('oculto');
         INDICADOR_JUGADOR_UNO.classList.add('oculto');
      }
   }
}

function esTurnoDeJugadorDos(jugadorDos, item) {
   if (item.value != true) {
      if (!alguienGano) {
         item.innerHTML = `<img src="${jugadorDos.rutaImg}" alt="logo" />`;
         turnoActual++;
         item.classList.add(jugadorDos.id);
         alguienGano = verificar(jugadorDos);
         INDICADOR_JUGADOR_UNO.classList.remove('oculto');
         INDICADOR_JUGADOR_DOS.classList.add('oculto');
      }
   }
}
function turno(turnoActual, jugadorUno, jugadorDos, item) {
   let turnoActualEsPar;
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
