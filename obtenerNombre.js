function guardarNombre() {
   Swal.fire({
      title: 'Registrar Jugadores',
      html:
         '<input id="nombreDelJugadorUno" class="swal2-input" placeholder="Nombre Jugador 1">' +
         '<input id="nombreDelJugadorDos" class="swal2-input" placeholder="Nombre Jugador 2">',
      focusConfirm: false,
      preConfirm: () => {
         return [
            document.getElementById('nombreDelJugadorUno').value,
            document.getElementById('nombreDelJugadorDos').value,
         ];
      },
   }).then((nombres) => {
      // console.log(nombres.value);
      if (!nombres.value || nombres.value[0] == '' || nombres.value[1] == '') {
         errorEnElNombre();
      } else {
         iniciarJuego(nombres.value);
      }
   });
}

function errorEnElNombre() {
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingresa los nombres de los dos jugadores',
   }).then(() => {
      setTimeout(guardarNombre(), 1000);
   });
}
guardarNombre();
