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
  "PÁSALO 7 A LA DERECHA",
  "EL REGALO LO DEBE TENER EL MÁS NAVIDEÑO",
  "AHORA LO TENDRÁ EL QUE HA COMIDO MÁS",
  "DÁSELO AL QUE HA HABLADO MENOS",
  "PÁSALO 5 A LA IZQUIERDA",
  "PÁSALO AL MÁS FASHIONISTA",
  "PÁSALO 1 A LA IZQUIERDA",
  "PÁSALO A QUIEN HA BAILADO MÁS",
  "PÁSALO AL QUE PONE LA MÚSICA",
  "PON EL REGALO EN EL ASIENTO Y TODOS SE MEZCLAN"
];

// ---- evitar repeticiones: barajamos y usamos una por vez ----
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shuffle(messages);

// ---- dibujar ruleta con textos ----
const ctx = wheel.getContext("2d");
const numSegments = messages.length;
const angle = (2 * Math.PI) / numSegments;

function drawWheel() {
  for (let i = 0; i < numSegments; i++) {
    const start = i * angle;
    const end = start + angle;

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, start, end);
    ctx.fillStyle = i % 2 === 0 ? "#f4a261" : "#e9c46a";
    ctx.fill();
    ctx.stroke();

    // texto
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(start + angle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    ctx.fillText(messages[i], 180, 5);
    ctx.restore();
  }
}

drawWheel();

// ---- acción del giro ----
btn.addEventListener("click", () => {
  if (spinCount >= TOTAL_SPINS) return;

  spinCount++;

  const extra = 720 + Math.floor(Math.random() * 360);
  rotation += extra;

  wheel.style.transition = "transform 3.2s ease-out";
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    // EPIC FINAL
    if (spinCount === TOTAL_SPINS) {
      result.innerText = "😳 Parece que ya tenemos ganador…";
      
      setTimeout(() => {
        result.innerText = "😱 ¡PERO ESPEREN…!";
      }, 1500);

      setTimeout(() => {
        result.innerText = "🎁✨ EL REGALO LO GANA… QUIEN USTEDES DECIDAN 😏";
        btn.disabled = true;
      }, 3500);

      return;
    }

    // tomar siguiente mensaje sin repetir
    const msg = messages.shift();
    result.innerText = msg;

    // si se acaban, volvemos a barajar por si acaso
    if (messages.length === 0) {
      messages = [...messages];
      shuffle(messages);
    }

  }, 3300);
});




