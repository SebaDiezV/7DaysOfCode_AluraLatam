// DAY 4

function sorteo() {
  let guessNumber;
  let randomNumber = Math.floor(Math.random() * 11); //para el primer ejercicio, colocas en esta variable un número de manera manual

  for (let i=1; i <= 3; i++) {
    guessNumber = parseInt(prompt('Ingresa un número entre 0 y 10: '));
    if (guessNumber == randomNumber) {
      alert('¡Felicidades!, acertaste al número secreto');
      break
    } else if (i < 3) {
      alert('¡Intentalo nuevamente!');
    } else {
      alert(`¡Fallaste!, el número secreto era ${randomNumber}`);
    }
  }
  return
}

sorteo()
