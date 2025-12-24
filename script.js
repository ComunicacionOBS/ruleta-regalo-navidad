const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");
const tickSound = document.getElementById("tickSound");

let rotation = 0;
let spinCount = 0;
const TOTAL_SPINS = 15;

let messages = [
  "LO DEBE TENER EL QUE LLEGÓ MÁS TARDE",
  "PÁSALO 3 A LA IZQUIERDA 👈",
  "PÁSALO AL DEL FRENTE 👀",
  "PÁSALO 7 A LA DERECHA 👉",
  "LO TIENE EL MÁS NAVIDEÑO 🎄",
  "AHORA LO TIENE QUIEN MÁS HA COMIDO 🍗",
  "DÁSELO AL QUE HA HABLADO MENOS 🤫",
  "PÁSALO 5 A LA IZQUIERDA 👈",
  "PÁSALO AL MÁS FASHIONISTA ✨",
  "PÁSALO 1 A LA IZQUIERDA 👈",
  "PÁSALO A QUIEN HA BAILADO MÁS 💃",
  "PÁSALO AL QUE PONE LA MÚSICA 🎶",
  "TODOS CAMBIAN DE LUGAR 🤯"
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

btn.addEventListener("click", () => {
  if (spinCount >= TOTAL_SPINS) return;

  spinCount++;

  // reproducir sonido de clic
  tickSound.currentTime = 0;
  tickSound.play();

  const extra = 720 + Math.random() * 360;
  rotation += extra;
  wheel.style.transition = "3.4s ease-out";
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    // último giro
    if (spinCount === TOTAL_SPINS) {
      result.innerText = "🤯 PARECE QUE YA HAY UNA DECISIÓN…";

      setTimeout(() => {
        result.innerText = "😱 PERO ESPEREN…";
      }, 1500);

      setTimeout(() => {
        result.innerText = "🎉🎁 ¡AHORA SÍ SE DEFINE!";
      }, 3000);

      setTimeout(() => {
        // efecto de confeti
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 3800);

      btn.disabled = true;
      return;
    }

    // mensaje sin repetir
    const index = Math.floor(Math.random() * messages.length);
    const chosen = messages[index];
    messages.splice(index, 1);

    result.innerText = chosen;
  }, 3400);
});





