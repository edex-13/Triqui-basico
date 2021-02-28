const TEXT_DEL_JUGADOR_UNO = document.getElementById('nombreJugador1');
const TEXT_DEL_JUGADOR_DOS = document.getElementById('nombreJugador2');
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
      gano(jugador);
      return true;
   } else if (CUATRO.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && SEIS.classList.contains(jugador.id)) {
      gano(jugador);
      return true;
   } else if (SIETE.classList.contains(jugador.id) && OCHO.classList.contains(jugador.id) && NUEVE.classList.contains(jugador.id)) {
      gano(jugador);
      return true;
   }

   if (UNO.classList.contains(jugador.id) && CUATRO.classList.contains(jugador.id) && SIETE.classList.contains(jugador.id)) {
      gano(jugador);
      return true;
   } else if (DOS.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && OCHO.classList.contains(jugador.id)) {
      gano(jugador);
      return true;
   } else if (TRES.classList.contains(jugador.id) && SEIS.classList.contains(jugador.id) && NUEVE.classList.contains(jugador.id)) {
      gano(jugador);
      return true;
   }
   if (UNO.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && NUEVE.classList.contains(jugador.id)) {
      gano(jugador);
      return true;
   } else if (TRES.classList.contains(jugador.id) && CINCO.classList.contains(jugador.id) && SIETE.classList.contains(jugador.id)) {
      gano(jugador);
      return true;
   }
   if(turnoActual==TURNO_MAXIMO+1){
      console.log(empate)
   }
   return false;
}

let alguienGano = false;

function gano(quienGano) {
   alert("Gano " + quienGano.nombre)
}
function empate(){
   alert('empate')
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
