const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");

let rotation = 0;
let spinCount = 0;
const TOTAL_SPINS = 15;

const messages = [
  "LO DEBE TENER EL QUE LLEGÓ MÁS TARDE",
  "PÁSALO 3 A LA IZQUIERDA 👈",
  "PÁSALO AL DEL FRENTE 👀",
  "PÁSALO 7 A LA DERECHA",
  "EL REGALO LO DEBE TENER EL MÁS NAVIDEÑO",
  "AHORA LO TENDRÁ EL QUE HA COMIDO MÁS",
  "DÁSELO AL QUE HA HABLADO MENOS",
  "PÁSALO A 5 A LA IZQUIERDA",
  "PÁSALO AL MÁS FASHIONISTA",
  "PÁSALO A 1 A LA IZQUIERDA",
  "PÁSALO A QUIÉN HA BAILADO MÁS",
  "PÁSALO AL QUE PONE LA MÚSICA",
  "PON EL REGALO EN EL ASIENTO Y TODOS SE MEZCLAN"
];

btn.addEventListener("click", () => {
  if (spinCount >= TOTAL_SPINS) return;

  spinCount++;

  const extra = 720 + Math.floor(Math.random() * 360);
  rotation += extra;

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    if (spinCount === TOTAL_SPINS) {
      result.innerText = "🎁🎉 ¡EL REGALO LO GANÓ LA PERSONA 24 A LA DERECHA!";
      btn.disabled = true;
    } else {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      result.innerText = msg;
    }
  }, 3200);
});



