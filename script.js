// Cerrar el modal automáticamente cuando se carguen todos los recursos
window.onload = function() {
    var overlay = document.getElementById('modalLoad');
    document.body.classList.add('body-sin-scroll'); // Deshabilitar el desplazamiento del cuerpo
    overlay.style.display = 'none';
    abrirModal()
  };

  

  function abrirModal() {
    document.getElementById('modalInicio').style.display = 'block';
    document.getElementById('contenedorMain').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
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
    startPetals();
  }

  // Función para pausar/reproducir la canción
function toggleReproducirPausar() {
  if (cancion.paused) {
    cancion.play(); // Si está pausada, reproducir la canción
    startPetals();
    // document.getElementById('botonMusica').textContent = 'Pausar';
  } else {
    cancion.pause(); // Si se está reproduciendo, pausar la canción
    stopPetals();
    // document.getElementById('botonMusica').textContent = 'Reproducir';
  }
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









// script.js
// Imagenes laterales desplazamiento
function checkVisibility() {
  const triggerSections = document.querySelectorAll(".div_bendicion");

  triggerSections.forEach(triggerSection => {
      const animatedImage = triggerSection.querySelector(".animated-image");
      const sectionPosition = triggerSection.getBoundingClientRect();

      // Calcular el medio de la sección
      const sectionMiddle = sectionPosition.top + sectionPosition.height / 2;

      // Verificar si el medio de la sección está en el centro de la ventana
      const isVisible =
          sectionMiddle >= (window.innerHeight / 2 - animatedImage.clientHeight / 2) &&
          sectionMiddle <= (window.innerHeight / 2 + animatedImage.clientHeight / 2);

      // Verificar si la sección está fuera de la vista
      const isOutOfView =
          sectionPosition.bottom < 0 || sectionPosition.top > window.innerHeight;

      if (isVisible) {
          animatedImage.classList.add("image-visible");
      } else if (isOutOfView) {
          animatedImage.classList.remove("image-visible");
      }
  });
}

document.addEventListener("scroll", checkVisibility);



// fin imagenes laterales desplazamiento

//caida de petalos
const contenedorMain = document.getElementById('contenedorMain');
let animationId;
const maxPetals = 20; // Máximo número de corazones en pantalla
let currentPetals = 0;

// Función para crear pétalos
function createPetal() {
  if (currentPetals >= maxPetals) return; // Limitar la cantidad de corazones
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${Math.random() * 4 + 3}s`; // Rango más largo
  contenedorMain.appendChild(petal); // Insertar directamente en el main
  currentPetals++;

  petal.addEventListener('animationend', () => {
      petal.remove();
      currentPetals--; // Decrementar el contador al eliminar el corazón
  });
}

// Función para iniciar la caída de pétalos
function startPetals() {
  if (animationId) return; // Si ya hay una animación en curso
  animationId = setInterval(createPetal, 500); // Crear pétalos a intervalos
}

// Función para detener la caída de pétalos
function stopPetals() {
  clearInterval(animationId);
  animationId = null;
  
  // Eliminar todos los pétalos existentes
  while (contenedorMain.getElementsByClassName('petal').length) {
      contenedorMain.removeChild(contenedorMain.getElementsByClassName('petal')[0]);
  }
  currentPetals = 0; // Reiniciar contador de pétalos
}

//fin caida de petalos