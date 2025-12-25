const wheel = document.getElementById("wheel");
const ctx = wheel.getContext("2d");

const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");
const tickSound = document.getElementById("tick");

let rotation = 0;
let spinning = false;

let messages = [
  "PÁSALO 3 A LA IZQUIERDA 👈",
  "PÁSALO AL DEL FRENTE 👀",
  "PÁSALO 5 A LA DERECHA 👉",
  "EL QUE LLEGÓ MÁS TARDE LO TIENE ⏰",
  "PÁSALO AL MÁS NAVIDEÑO 🎄",
  "CAMBIAN DE LUGAR TODOS 🙃",
  "PÁSALO AL QUE PONE LA MÚSICA 🎵",
  "PÁSALO AL QUE HA COMIDO MÁS 🍗",
  "PÁSALO AL QUE HA HABLADO MENOS 🤫",
  "PÁSALO 2 A LA IZQUIERDA 👈",
  "PÁSALO 4 A LA DERECHA 👉",
  "PONLO EN EL CENTRO Y TODOS SE MEZCLAN 🔁"
];

// para no repetir
let remaining = [...messages];

const slice = (Math.PI * 2) / messages.length;

function drawWheel() {
  for (let i = 0; i < messages.length; i++) {
    ctx.beginPath();
    ctx.moveTo(210, 210);
    ctx.arc(210, 210, 210, slice * i, slice * (i + 1));
    ctx.closePath();
    ctx.fillStyle = i % 2 === 0 ? "#c1121f" : "#1d3557";
    ctx.fill();
  }
}

drawWheel();

function spin() {
  if (spinning) return;
  spinning = true;

  result.innerText = "";

  // sonido
  let interval = setInterval(() => tickSound.play(), 80);

  const extra = 1080 + Math.random() * 720;
  rotation += extra;

  wheel.style.transition = "4s ease-out";
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    clearInterval(interval);

    const normalized = rotation % 360;
    const index = Math.floor(
      (messages.length - normalized / (360 / messages.length)) % messages.length
    );

    // elegir mensaje sin repetir
    if (remaining.length === 0) remaining = [...messages];
    const msgIndex = Math.floor(Math.random() * remaining.length);
    const msg = remaining.splice(msgIndex, 1)[0];

    result.innerText = msg;

    // confetti final cuando se acaben mensajes
    if (remaining.length === 0) launchConfetti();

    spinning = false;
  }, 4200);
}

btn.addEventListener("click", spin);

// 🎉 confetti simple
function launchConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    const colors = ["#ff0", "#0f0", "#0ff", "#f0f", "#ff5733"];
    const div = document.createElement("div");
    div.innerHTML = "🎉";
    div.style.position = "fixed";
    div.style.left = Math.random() * 100 + "vw";
    div.style.top = "-20px";
    div.style.fontSize = "28px";
    div.style.animation = "fall 2s linear forwards";
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 2000);

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}





