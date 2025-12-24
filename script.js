const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");

let rotation = 0;
let spinCount = 0;
const TOTAL_SPINS = 15;

const messages = [
  "PÁSALO A LA DERECHA 👉",
  "PÁSALO A LA IZQUIERDA 👈",
  "AL DEL FRENTE 👀",
  "EL REGALO SE QUEDA CON…",
  "EL REGALO ES PARA…",
  "RESPIRÁ… 😮‍💨",
  "TODO PUEDE PASAR…",
  "ÚLTIMOS GIROS… 🔥"
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


