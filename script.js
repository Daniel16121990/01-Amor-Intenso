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

//***************cuenta regresiva----------
var fechaObjetivo = new Date('2024-12-21:10:00'); //año/mes/dia

    function actualizarCuentaRegresiva() {
        var ahora = new Date().getTime();
        var diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            // Detener la cuenta regresiva
            clearInterval(intervalo);
            // Mostrar el mensaje de llegada
            document.getElementById('reloj').innerHTML = '<span>Llegó el día!</span>';
            return;
        }

        var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('dias_numero').innerText = dias;
        document.getElementById('horas_numero').innerText = horas;
        document.getElementById('minutos_numero').innerText = minutos;
        document.getElementById('segundos_numero').innerText = segundos;
    }

    var intervalo = setInterval(actualizarCuentaRegresiva, 1000);

    actualizarCuentaRegresiva(); // Llamar una vez para evitar el retraso inicial
//**************fin cuenta regresiva***** *

//funcion para el scroll de programacion
function initializeSlider(slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
      if (!isDown) return; // stop the function from running
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
  });
}

// Inicializa el slider en ambos divs
const sliderProgramacion = document.querySelector('.div_programacion');
const sliderBendicion = document.querySelector('.div_bendicion');

initializeSlider(sliderProgramacion);
initializeSlider(sliderBendicion);
//fin funcion de scroll programacion
