<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Ruleta del Regalo</title>

<style>
body{
  background:#051026;
  color:white;
  text-align:center;
  font-family:Arial, Helvetica, sans-serif;
}
#ruleta{
  width:400px;
  height:400px;
  border-radius:50%;
  border:6px solid white;
  margin:25px auto;
  position:relative;
  overflow:hidden;
}
#ruleta canvas{
  width:100%;
  height:100%;
}
button{
  padding:12px 24px;
  font-size:16px;
  border:none;
  border-radius:10px;
  cursor:pointer;
  background:#e63946;
  color:white;
}
button:disabled{
  opacity:.5;
  cursor:not-allowed;
}
</style>
</head>

<body>
<h2>🎄 Ruleta del Regalo 🎁</h2>

<div id="ruleta">
  <canvas id="wheel" width="400" height="400"></canvas>
</div>

<button id="btn">GIRAR</button>

<script>
const opcionesOriginal = [
"CAMBIÁS CON LA PERSONA A LA DERECHA",
"CAMBIÁS CON LA PERSONA A LA IZQUIERDA",
"TE QUEDÁS CON TU REGALO",
"ROBAR AL QUE TIENE EL REGALO MÁS GRANDE",
"ROBAR AL QUE TIENE EL REGALO MÁS PEQUEÑO",
"CAMBIAN LOS DOS QUE LLEGARON MÁS TARDE",
"CAMBIA EL QUE PONE LA MÚSICA",
"CAMBIÁS CON QUIEN HA BAILADO MÁS",
"CAMBIÁS CON LA PERSONA DE ENFRENTE",
"CAMBIÁS CON QUIEN MÁS HA REÍDO",
"CAMBIÁS CON QUIEN HA HABLADO MÁS",
"CAMBIÁS CON QUIEN VINO DE ROJO",
"CAMBIÁS CON QUIEN TIENE GORRO",
"CAMBIÁS CON QUIEN TIENE LENTES",
"CAMBIÁS CON QUIEN TIENE TAZA"
];

// Se baraja solo una vez
let opciones = [...opcionesOriginal].sort(() => Math.random() - 0.5);

let ctx = document.getElementById("wheel").getContext("2d");
let btn = document.getElementById("btn");

const maxSpins = 15;
let spinCount = 0;
let currentRotation = 0;

function dibujarRuleta() {
  const total = opciones.length;
  const angulo = (2 * Math.PI) / total;

  for (let i = 0; i < total; i++) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.fillStyle = i % 2 === 0 ? "#BB0000" : "#0b3b82";
    ctx.arc(200, 200, 200, i * angulo, (i + 1) * angulo);
    ctx.fill();
    ctx.save();

    ctx.translate(200, 200);
    ctx.rotate(i * angulo + angulo / 2);
    ctx.fillStyle = "white";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(opciones[i], 90, 5);
    ctx.restore();
  }
}

function girar() {
  if (spinCount >= maxSpins) return;

  spinCount++;

  const index = (spinCount - 1) % opciones.length;
  const gradosPorOpcion = 360 / opciones.length;
  const destino = 360 - (index * gradosPorOpcion + gradosPorOpcion / 2);

  currentRotation += 720 + destino;

  document.getElementById("wheel").style.transition = "4s ease-out";
  document.getElementById("wheel").style.transform = `rotate(${currentRotation}deg)`;

  if (spinCount === maxSpins) {
    btn.disabled = true;
    btn.textContent = "Se acabaron los giros 🎄";
  }
}

dibujarRuleta();
btn.addEventListener("click", girar);
</script>

</body>
</html>





