// Cerrar el modal automáticamente cuando se carguen todos los recursos
window.onload = function() {
    var overlay = document.getElementById('modalLoad');
    document.body.classList.add('body-sin-scroll'); // Deshabilitar el desplazamiento del cuerpo
    overlay.style.display = 'none';
    abrirModal()
  };

  function abrirModal() {
    document.getElementById('modalInicio').style.display = 'block';
    document.body.classList.add('body-sin-scroll'); // Deshabilitar el desplazamiento del cuerpo

  }

  // Función para cerrar el modal sin musica
  function cerrarModal() {
    flotante.style.display = 'grid'
    document.getElementById('modalInicio').style.display = 'none';
    document.body.classList.remove('body-sin-scroll'); // Habilitar el desplazamiento del cuerpo
  }

  function cerrarModalConMusica(){
    flotante.style.display = 'grid'
    document.getElementById('modalInicio').style.display = 'none';
    document.body.classList.remove('body-sin-scroll'); // Habilitar el desplazamiento del cuerpo
    cancion.play(); // Reproducir la canción
  }
  var flotante = document.getElementById('botonMusica')
  // Referencia al elemento de audio
var cancion = document.getElementById('cancion');

//***************parallax foto de portada principal**********
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.sectionMainPortada');
    let scrollPosition = window.scrollY;

    // Calcula el nuevo valor de background-position en el eje Y en función de la posición del scroll
    let backgroundPositionY = scrollPosition * 0.5; // Ajusta este valor para controlar la velocidad del desplazamiento vertical

    parallax.style.backgroundPosition = `center ${backgroundPositionY}px`;
});
//***************fin parallax*************/
