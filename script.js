const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");

let currentRotation = 0;
let spins = 0;
const TOTAL_SPINS = 15;

// Este es el arreglo de textos (puedes cambiar)
const texts = [
  "Pasalo 3 a la derecha",
  "Pasalo 4 a la izquierda",
  "Al del frente",
  "Respirá...",
  "Se queda con…",
  "Es para…",
  "Últimos giros",
  "🎁 TUYOOOO"
];

btn.addEventListener("click", () => {
  if (spins >= TOTAL_SPINS) return;

  spins++;

  // cálculo del ángulo
  const randomDegrees = Math.floor(Math.random() * 360) + 720;
  currentRotation += randomDegrees;

  // FORZAR repaint antes de animar
  wheel.style.transition = "none";
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    // ahora sí con transición
    wheel.style.transition = "transform 2s ease-out";
    wheel.style.transform = `rotate(${currentRotation + randomDegrees}deg)`;
    currentRotation += randomDegrees;
  }, 20);

  if (spins === TOTAL_SPINS) {
    btn.disabled = true;
    setTimeout(() => {
      result.innerText = "🎉🎁 ¡EL REGALO ES TUYOOOO!";
    }, 2300);
  } else {
    // mensaje intermedio
    const idx = Math.floor(Math.random() * (texts.length - 1));
    setTimeout(() => {
      result.innerText = texts[idx];
    }, 2300);
  }
});
