const nombreJugadorUno = document.getElementById('nombreJugador1');
const nombreJugadorDos = document.getElementById('nombreJugador2');
const item0_0 = document.getElementById('1');
const item0_1 = document.getElementById('2');
const item0_2 = document.getElementById('3');
const item1_0 = document.getElementById('4');
const item1_1 = document.getElementById('5');
const item1_2 = document.getElementById('6');
const item2_0 = document.getElementById('7');
const item2_1 = document.getElementById('8');
const item2_2 = document.getElementById('9');
let turno = 1;
class jugador {
   constructor(name, id) {
      this.name = name;
      this.id = id;
      this.asignarImagen();
   }
   asignarImagen() {
      if (this.id == 0) {
         this.img = '<img src="img/x.svg">';
      } else {
         this.img = '<img src="img/Circulo.svg">';
      }
   }
}
guardarNombre();
function guardarNombre() {
   Swal.fire({
      title: 'Registrar Jugadores',
      html:
         '<input id="name1" class="swal2-input" placeholder="Nombre Jugador 1">' +
         '<input id="name2" class="swal2-input" placeholder="Nombre Jugador 2">',
      focusConfirm: false,
      preConfirm: () => {
         return [document.getElementById('name1').value, document.getElementById('name2').value];
      },
   }).then((e) => {
      console.log(e.value);
      if (!e.value || e.value[0] == '' || e.value[1] == '') {
         errorEnElNombre();
      } else {
         iniciarJuego(e.value);
      }
   });
}

function errorEnElNombre() {
   // console.log('error');
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingresa los nombres de los dos jugadores',
   }).then(() => {
      setTimeout(guardarNombre(), 1000);
   });
}

function tablero(jugador1, jugador2) {
   item0_0.addEventListener('click', () => {
      ponerImg(item0_0);
   });
   item0_1.addEventListener('click', () => {
      ponerImg(item0_1);
   });
   item0_2.addEventListener('click', () => {
      ponerImg(item0_2);
   });

   item1_0.addEventListener('click', () => {
      ponerImg(item1_0);
   });
   item1_1.addEventListener('click', () => {
      ponerImg(item1_1);
   });
   item1_2.addEventListener('click', () => {
      ponerImg(item1_2);
   });
   item2_0.addEventListener('click', () => {
      ponerImg(item2_0);
   });
   item2_1.addEventListener('click', () => {
      ponerImg(item2_1);
   });
   item2_2.addEventListener('click', () => {
      ponerImg(item2_2);
   });
   function ponerImg(id) {
      if (turno <= 9) {
         if (!id.value) {
            if (turno % 2 == 0) {
               id.innerHTML = jugador1.img;
               id.value = 1;
               verificar();
            } else {
               id.innerHTML = jugador2.img;
               id.value = 2;
               verificar();
            }
            turno++;
         }
      }
      if (turno == 9) {
      }
   }
}
function verificar(secuenciaUna, secuenciaDos) {
   if ((item0_0.value == item0_1.value && item0_0.value == item0_2.value) && (item0_0.value != undefined  && item0_1.value != undefined && item0_2.value != undefined) ) {
      console.log('gano ' + item0_0.value);
   } else if (item1_0.value == item1_1.value && item1_0.value == item1_2.value && item1_0 != undefined) {
      console.log('gano ' + item1_0.value);
   }
}
function iniciarJuego(nombre) {
   const jugador1 = new jugador(nombre[0], 0);
   const jugador2 = new jugador(nombre[1], 1);
   nombreJugadorUno.innerText = jugador1.name;
   nombreJugadorDos.innerText = jugador2.name;
   tablero(jugador1, jugador2);
}
