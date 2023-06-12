// Establece la fecha y hora objetivo de la cuenta regresiva (en hora de Chile)
var countdownDate = new Date("August 10, 2023 10:00:00 GMT-0400").getTime();

// Actualiza la cuenta regresiva cada segundo
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  // Calcula los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra la cuenta regresiva en la página
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Si la cuenta regresiva termina, muestra un mensaje
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "¡La cuenta regresiva ha terminado!";
  }
}, 1000);
