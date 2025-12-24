const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

let currentRotation = 0;
let spins = 0;
const TOTAL_SPINS = 15;

spinBtn.addEventListener("click", () => {
  if (spins >= TOTAL_SPINS) return;

  spins++;

  // Giro aleatorio
  const randomSpin = Math.floor(Math.random() * 360) + 720;
  currentRotation += randomSpin;

  wheel.style.transform = `rotate(${currentRotation}deg)`;

  if (spins === TOTAL_SPINS) {
    spinBtn.disabled = true;

    setTimeout(() => {
      result.innerHTML = "🎉🎁<br>¡EL REGALO ES TUYOOOO!";
    }, 1100);
  } else {
    result.textContent = "";
  }
});

