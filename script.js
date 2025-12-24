const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");

let rotation = 0;
let spinCount = 0;
const TOTAL_SPINS = 15;

let messages = [
  "LO DEBE TENER EL QUE LLEGÓ MÁS TARDE",
  "PÁSALO 3 A LA IZQUIERDA 👈",
  "PÁSALO AL DEL FRENTE 👀",
  "PÁSALO 7 A LA DERECHA 👉",
  "EL MÁS NAVIDEÑO LO TIENE 🎄",
  "AHORA LO TIENE QUIEN MÁS HA COMIDO 🍗",
  "DÁSELO AL QUE HA HABLADO MENOS 🤫",
  "PÁSALO 5 A LA IZQUIERDA 👈",
  "PÁSALO AL MÁS FASHIONISTA ✨",
  "PÁSALO 1 A LA IZQUIERDA 👈",
  "PÁSALO AL QUE BAILA MÁS 💃",
  "PÁSALO AL QUE PONE LA MÚSICA 🎶",
  "TODOS SE LEVANTAN Y CAMBIAN DE LUGAR 🤯"
];

// mensaje especial solo para el último giro
const FINAL_MOVES = [
  "👉 PÁSALO 8 A LA DERECHA — ÚLTIMO MOVIMIENTO",
  "👈 PÁSALO 6 A LA IZQUIERDA — ÚLTIMO MOVIMIENTO",
  "➡️ PÁSALO AL SEGUNDO A TU DERECHA — FINAL",
  "⬅️ PÁSALO AL SEGUNDO A TU IZQUIERDA — FINAL"
];

// dibujar ruleta
const ctx = wheel.getContext("2d");
const slice = (2 * Math.PI) / messages.length;

function drawWheel() {
  for (let i = 0; i < messages.length; i++) {
    ctx.beginPath();
    ctx.moveTo(210, 210);
    ctx.arc(210, 210, 210, slice * i, slice * (i + 1));
    ctx.closePath();

    ctx.fillStyle = i % 2 === 0 ? "#c1121f" : "#1d3557";
    ctx.fill();

    ctx.save();
    ctx.translate(210, 210);
    ctx.rotate(slice * i + slice / 2);
    ctx.fillStyle = "white";
    ctx.font = "14px Poppins";
    ctx.textAlign = "right";
    ctx.fillText(messages[i], 185, 5);
    ctx.restore();
  }
}

drawWheel();

// girar
btn.addEventListener("click", () => {
  if (spinCount >= TOTAL_SPINS) return;

  spinCount++;

  const extra = 720 + Math.random() * 360;
  rotation += extra;
  wheel.style.transition = "3.4s ease-out";
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    // último giro: tensión + movimiento final
    if (spinCount === TOTAL_SPINS) {
      const finalMove =
        FINAL_MOVES[Math.floor(Math.random() * FINAL_MOVES.length)];

      result.innerText = "🤯 PARECE QUE YA… ESPEREN…";

      setTimeout(() => {
        result.innerText = "😱 NO — AÚN NO TERMINA…";

        setTimeout(() => {
          result.innerText = finalMove;
          btn.disabled = true;
        }, 2200);
      }, 2000);

      return;
    }

    // sin repetir frases
    const index = Math.floor(Math.random() * messages.length);
    const chosen = messages[index];
    messages.splice(index, 1);

    result.innerText = chosen;
  }, 3400);
});





