
// 1` que vuelve a foja 0, quita la clase 'playing' del elemento (en este caso de los divs key)
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

// agrega la class para que dispare e lsonido y el selector de css
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

// busca que se pueda apretar repetidas veces las teclas. reiniciando el sonido y la trasnformacion del css
// cuando se aprete la tecla "keydown"
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);