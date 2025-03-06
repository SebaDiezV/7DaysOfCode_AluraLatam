//DAY 7

let tipoOperacion;
let valor1 = 0;
let valor2 = 0;
let continuar = 'si';

while (continuar == 'si') {
  tipoOperacion = prompt('Indíca que tipo de operación deseas realizar, elige el número de la operación:\n1 para suma\n2 para resta\n3 para multiplicación\n4 para división');
  valor1 = parseInt(prompt('Ingresa el primer valor para la operación: '));
  valor2 = parseInt(prompt('Ingresa el primer valor para la operación: '));
  

  if(tipoOperacion === 1){
    sum();
  }else if(tipoOperacion === 2){
    rest();
  }else if(tipoOperacion === 3){
    mult();
  }else if(tipoOperacion === 4){
    div();
  }else{
    alert('El tipo de operación no es permitido');
  }

  continuar = prompt('Operación finalizada, ¿deseas realizar otra operación? si - no: ').toLowerCase();
}

alert('Gracias por usar la calculadora, programa finalizado');

function sum(){
  let resultado = valor1 + valor2;
  if (isNaN(resultado)){
    return alert('Los valores ingresados no son validos');
  }else{
    return alert(`El resultado de la suma de ${valor1} y ${valor2} es ${resultado}`);
  }
}

function rest(){
  let resultado = valor1 - valor2;
  if (isNaN(resultado)){
    return alert('Los valores ingresados no son validos');
  }else{
    return alert(`El resultado de la resta de ${valor1} y ${valor2} es ${resultado}`);
  }
}

function mult(){
  let resultado = valor1 * valor2;
  if (isNaN(resultado)){
    return alert('Los valores ingresados no son validos');
  }else{
    return alert(`El resultado de la multiplicación de ${valor1} y ${valor2} es ${resultado}`);
  }
}

function div(){
  let resultado = valor1 / valor2;
  if (isNaN(resultado)){
    return alert('Los valores ingresados no son validos');
  }else{
    return alert(`El resultado de la división de ${valor1} y ${valor2} es ${resultado}`);
  }
}
