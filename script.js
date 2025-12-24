const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");

let rotation = 0;
let count = 0;
const TOTAL = 15;

btn.addEventListener("click", () => {
  if (count >= TOTAL) return;

  count++;

  const spin = Math.floor(Math.random() * 360) + 720;
  rotation += spin;

  wheel.style.transform = `rotate(${rotation}deg)`;

  if (count === TOTAL) {
    btn.disabled = true;
    setTimeout(() => {
      result.innerHTML = "🎉🎁<br>¡EL REGALO ES TUYOOOO!";
    }, 1400);
  }
});


