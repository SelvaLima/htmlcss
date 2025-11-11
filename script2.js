// MODO NOTURNO / CLARO

const modoBtn = document.getElementById('modoBtn');
modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modoBtn.textContent = '☀️';
  } else {
    modoBtn.textContent = '🌙';
  }
});

// CONTAGEM REGRESSIVA

const contador = document.getElementById('contador');


const dataEvento = new Date('Dec 21, 2025 20:00:00').getTime();

const intervalo = setInterval(() => {
  const agora = new Date().getTime();
  const distancia = dataEvento - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    clearInterval(intervalo);
    contador.innerHTML = 'A FESTA COMEÇOU! ';
  }
}, 1000);

