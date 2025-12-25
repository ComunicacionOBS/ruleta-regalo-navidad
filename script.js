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

#container{
  position:relative;
  width:420px;
  margin:25px auto;
}

#pointer{
  width:0;
  height:0;
  border-left:14px solid transparent;
  border-right:14px solid transparent;
  border-bottom:22px solid #ffd000;
  position:absolute;
  top:-18px;
  left:50%;
  transform:translateX(-50%);
  z-index:5;
}

#wheel{
  width:400px;
  height:400px;
  border-radius:50%;
  border:6px solid #fff;
  display:block;
  margin:auto;
  transition:4s ease-out;
}

button{
  padding:12px 24px;
  font-size:16px;
  border:none;
  border-radius:10px;
  cursor:pointer;
  background:#e63946;
  color:white;
  margin-top:14px;
}

button:disabled{
  opacity:.5;
  cursor:not-allowed;
}
</style>
</head>

<body>

<h2>🎄 Ruleta del Regalo 🎁</h2>

<div id="container">
  <div id="pointer"></div>
  <canvas id="wheel" width="400" height="400"></canvas>
</div>

<button id="btn">GIRAR</button>

<script>
document.addEventListener("DOMContentLoaded", () => {

  const opciones = [
    "CAMBIÁS CON EL DE LA IZQUIERDA",
    "CAMBIÁS CON EL DE LA DERECHA",
    "ROBAR AL MÁS NAVIDEÑO",
    "ROBAR AL MÁS HAMBRIENTO",
    "CAMBIÁS CON QUIEN PONE LA MÚSICA",
    "CAMBIÁS CON QUIEN HA BAILADO MÁS",
    "CAMBIÁS CON EL DE ENFRENTE",
    "ROBAR AL QUE LLEGÓ MÁS TARDE",
    "CAMBIÁS CON QUIEN HA REÍDO MÁS",
    "CAMBIÁS CON QUIEN TIENE GORRO",
    "CAMBIÁS CON QUIEN TIENE LENTES",
    "TE QUEDÁS CON TU REGALO",
    "TODOS CAMBIAN A LA IZQUIERDA",
    "TODOS CAMBIAN A LA DERECHA",
    "EL REGALO VIAJA 3 A LA IZQUIERDA"
  ];

  // Barajamos una sola vez (para que no se repitan)
  const frases = [...opciones];

  const canvas = document.getElementById("wheel");
  const ctx = canvas.getContext("2d");
  const btn = document.getElementById("btn");

  const total = frases.length;
  const ang = (2 * Math.PI) / total;

  function dibujar() {
    ctx.clearRect(0,0,400,400);

    for(let i=0;i<total;i++){
      ctx.beginPath();
      ctx.moveTo(200,200);
      ctx.fillStyle = i % 2 === 0 ? "#BB0000" : "#0b3b82";
      ctx.arc(200,200,200, i*ang, (i+1)*ang);
      ctx.fill();
      ctx.save();

      ctx.translate(200,200);
      ctx.rotate(i*ang + ang/2);
      ctx.fillStyle="white";
      ctx.font="bold 12px Arial";
      ctx.textAlign="center";
      ctx.fillText(frases[i], 95, 5);
      ctx.restore();
    }
  }

  dibujar();

  let spins = 0;
  const maxSpins = 15;
  let rotation = 0;

  btn.addEventListener("click", () => {
    if (spins >= maxSpins) return;

    spins++;

    const gradosPor = 360 / total;
    const destino = 360 - ((spins-1) * gradosPor + gradosPor/2);

    rotation += 720 + destino;

    canvas.style.transform = `rotate(${rotation}deg)`;

    if (spins === maxSpins){
      btn.disabled = true;
      btn.textContent = "🎁 ¡FIN DEL JUEGO!";
    }
  });

});
</script>

</body>
</html>
