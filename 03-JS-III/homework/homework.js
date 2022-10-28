// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    const numerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let suma = 0;

    for (let i = 0; i < numerArray.length; i += 1) {
      suma += numerArray[i];
    }

    return suma;
    return (imprimirSumaNumeros([]));
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  
  let pares = array.filter((x) => x % 2 === 0) 
  return pares;
  
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arrayCuadrado = [];

  for (var i = 0; i < array.length; i ++) {
    arrayCuadrado.push(array[i] ** 2);
  }
  return arrayCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var total = 0;

  for (let i = 0; i < array.length; i ++) {
    total += array[i];
  }
  return total;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let digitos = String(num);
  return digitos.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
