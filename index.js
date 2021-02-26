const nombreJugadorUno = document.getElementById('nombreJugador1')
const nombreJugadorDos = document.getElementById('nombreJugador2')

class jugador {
   constructor(name, id) {
      this.name = name;
      this.id = id;
      this.asignarImagen();
   }
   asignarImagen() {
      if (this.id == 0) {
         this.img = 'img/x.svg';
      } else {
         this.img = 'img/Circulo.svg';
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
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
   }).then(() => {
      setTimeout(guardarNombre(), 3000);
   });
}

function iniciarJuego(nombre) {
   const jugador1 = new jugador(nombre[0],0);
   const jugador2 = new jugador(nombre[1],1);

   nombreJugadorUno.innerText = jugador1.name
   nombreJugadorDos.innerText = jugador2.name

}
