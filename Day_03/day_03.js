// DAY 3

let ciclo1 = true;
let ciclo2 = true;
let especializacion;
let eleccion;

while (ciclo1 == true){
  especializacion = parseInt(prompt('¿En cuál área deseas especializarte? selecciona 1 para Front-End o 2 para Back-End'));
  if(especializacion == 1) {
    especializacion = 'Front-End';
    while (ciclo2 == true) {
      eleccion = prompt('¿Cuál de estos Frameworks quieres aprender? Selecciona 1 para React o 2 para Vue');

      if(eleccion == 1) {
        eleccion = 'React';
        ciclo2 = false
      } else if (eleccion == 2) {
        eleccion = 'Vue';
        ciclo2 = false
      } else {
        alert('Elección fuera de rango');
      }
    }
    ciclo1 = false;
  } else if (especializacion == 2) {
    especializacion = 'Back-End';
    while (ciclo2 == true) {
      eleccion = prompt('¿Cuál de estos lenguajes de programación quieres aprender? Selecciona 1 para C# o 2 para Java');
      if (eleccion == 1) {
        eleccion = 'C#';
        ciclo2 = false
      } else if (eleccion == 2){
        eleccion = 'Java';         
        ciclo2 = false;
      } else {
        alert('Elección fuera de rango');          
      }
    }
    ciclo1 = false;
  } else {
      alert('Elección fuera de rango');
  }
}


let decision = prompt(`presiona 1 si deseas seguir estudiando ${especializacion} o 2 si desas cambiar a Fullstack: `);

if (decision == 1) {
  alert(`Has decidido seguir estudiando ${especializacion}`);
} else if (decision == 2) {
  especializacion = 'Fullstack';
  alert(`Has decidido cambiar tus estudios a ${especializacion}`);
} else {
  alert('Elección fuera de rango');
}

let otraTecnologia = 0
while (otraTecnologia !== '') { 
  otraTecnologia = prompt('¿Hay alguna otra tecnologia que te gustaría aprender? deja en blanco si no tienes interes');
  if (otraTecnologia !== ''){
  alert(`${otraTecnologia} es muy interesante para aprender`);
  }
}
