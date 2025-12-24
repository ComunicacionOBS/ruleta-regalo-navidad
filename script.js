const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");

let rotation = 0;
let spinCount = 0;
const TOTAL_SPINS = 15;

const messages = [
  "Pásalo a la derecha 👉",
  "Pásalo a la izquierda 👈",
  "Al del frente 👀",
  "El regalo se queda con…",
  "El regalo es para…",
  "Respirá… 😮‍💨",
  "Todo puede pasar…",
  "Últimos giros… 🔥"
];

btn.addEventListener("click", () => {
  if (spinCount >= TOTAL_SPINS) return;

  spinCount++;

  const extra = 720 + Math.floor(Math.random() * 360);
  rotation += extra;

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    if (spinCount === TOTAL_SPINS) {
      result.innerText = "🎁🎉 ¡EL REGALO ES TUYOOOO!";
      btn.disabled = true;
    } else {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      result.innerText = msg;
    }
  }, 3200);
});

