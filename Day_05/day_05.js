// Day 5

let frutas = [];
let verduras =[];
let lacteos = [];
let congelados = [];
let dulces = [];
let seguirComprando = true;
let producto;
let categoria;

while (seguirComprando == true) {
  let compra = prompt('¿Quieres agregar objetos a tu lista de compras? ingresa Si o No: ').toLowerCase();
  
  if (compra == 'no') {
    alert(`Tu lista de compras son las siguientes:\nFutas [${frutas.join(', ')}]\nVerduras [${verduras.join(', ')}]\nLácteos [${lacteos.join(', ')}]\nCongelados [${congelados.join(', ')}]\nDulces [${dulces.join(', ')}]`);
    seguirComprando = false;
  } else if (compra == 'si') {
    producto = prompt('¿Que producto quieres comprar?: ');
    categoria = prompt('¿A cuál de las siguientes categorias pertenece el producto?: Frutas, Verduras, Lacteos, Congelados, Dulces').toLowerCase();
   
    if (categoria == 'frutas'){
      frutas.push(producto);

    }else if (categoria == 'verduras'){
      verduras.push(producto);

    }else if (categoria == 'lacteos'){
      lacteos.push(producto);
      
    }else if (categoria == 'congelados'){
      congelados.push(producto);
      
    }else if (categoria == 'dulces'){
      dulces.push(producto);
    }else{
      alert('No existe esa categoria');
    }
  }else{
    alert('Opción no valida');
  }
}
