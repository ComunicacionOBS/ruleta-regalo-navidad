const wheel = document.getElementById("wheel");
const result = document.getElementById("result");
const counter = document.getElementById("counter");
const tick = document.getElementById("tick");

let spins = 0;
let rotation = 0;
const TOTAL_SPINS = 15;
const texts = [
  "Pasalo a la derecha",
  "Pasalo a la izquierda",
  "Al del frente",
  "Respirá",
  "El regalo se queda con…",
  "El regalo es para…",
  "Casi casi…",
  "🎁 EL REGALO ES TUYOOOO"
];

wheel.onclick = () => {
  if (spins >= TOTAL_SPINS) return;

  spins++;
  counter.textContent = `Giro ${spins} de ${TOTAL_SPINS}`;
  tick.play();

  let index;
  if (spins === TOTAL_SPINS) {
    index = 7;
  } else {
    index = Math.floor(Math.random() * 7);
  }

  rotation += 360 * 5 + (360 / texts.length) * index;
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    result.textContent = texts[index];
  }, 4000);
  counter.textContent = `Giro ${spins} de ${TOTAL_SPINS}`;

};
