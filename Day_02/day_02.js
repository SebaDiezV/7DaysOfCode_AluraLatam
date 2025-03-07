// DAY 2
function saludoInicial(){
  let nombre = prompt('¿Cuál es tu nombre?: ');
  let edad = parseInt(prompt('¿Cuál es tu edad?: '));
  let lenguaje =  prompt('¿Que legunaje de programación estás estudiando?: ');

  if (Number.isInteger(edad)) {
    alert(`Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje}!`);
  } else {
    alert('Por favor ingresa tu edad como un valor númerico');
    return
  }
  
  let pregunta1 = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con número 1 para SÍ o 2 para NO: `));
  
  if (pregunta1 == 1){
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
  } else if (pregunta1 == 2){
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
  } else {
    alert('Ingresaste un número fuera de rango');
  }
  return
}
saludoInicial()
