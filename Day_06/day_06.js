// Day 6 

let frutas = [];
let verduras =[];
let lacteos = [];
let congelados = [];
let dulces = [];
let seguirComprando = true;
let producto;
let categoria;
let compra;
let borrar;
let borraElemento;



while (seguirComprando == true) {

  borrar = prompt('¿Quieres quitar algún producto de la lista de compras? ingresa Si o No (Selecciona No si aún no ingresas productos)').toLowerCase();

  if (borrar == 'si') {
    categoria = prompt('¿De cual categoría deseas eliminar un producto? Frutas, Verduras, Lácteos, Congelados, Dulces').toLowerCase();
    
    if (categoria == 'frutas'){
      producto = prompt(`¿Que producto deseas eliminar?\nFutas [${frutas.join(', ')}] `).toLowerCase()
      if (frutas.includes(producto)){
        borraElemento = frutas.indexOf(producto);
        frutas.splice(borraElemento, 1);
        alert('Elemento borrado exitosamente');
      } else {
        alert('Producto no existe en el listado');
      }
    } else if (categoria == 'verduras'){
      producto = prompt(`¿Que producto deseas eliminar?\nVerduras [${verduras.join(', ')}] `).toLowerCase();
      if (verduras.includes(producto)){
        borraElemento = verduras.indexOf(producto);
        verduras.splice(borraElemento, 1);
        alert('Elemento borrado exitosamente');
      } else {
        alert('Producto no existe en el listado');
      }
    } else if (categoria == 'lacteos'){
      producto = prompt(`¿Que producto deseas eliminar?\nLacteos [${lacteos.join(', ')}] `).toLowerCase();
      if (lacteos.includes(producto)){
        borraElemento = lacteos.indexOf(producto);
        lacteos.splice(borraElemento, 1);
        alert('Elemento borrado exitosamente');
      } else {
        alert('Producto no existe en el listado');
      }
    }else if (categoria == 'congelados'){
      producto = prompt(`¿Que producto deseas eliminar?\nCongelados [${congelados.join(', ')}] `).toLowerCase();
      if (congelados.includes(producto)){
        borraElemento = congelados.indexOf(producto);
        congelados.splice(borraElemento, 1);
        alert('Elemento borrado exitosamente');
      } else {
        alert('Producto no existe en el listado');
      }
    }else if (categoria == 'dulces'){
      producto = prompt(`¿Que producto deseas eliminar?\nDulces [${dulces.join(', ')}] `).toLowerCase();
      if (dulces.includes(producto)){
        borraElemento = dulces.indexOf(producto);
        dulces.splice(borraElemento, 1);
        alert('Elemento borrado exitosamente');
      } else {
        alert('Producto no existe en el listado');
      }
    }
  } else {
    
      compra = prompt('¿Quieres agregar objetos a tu lista de compras? ingresa Si o No: ').toLowerCase();
      

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
  }
