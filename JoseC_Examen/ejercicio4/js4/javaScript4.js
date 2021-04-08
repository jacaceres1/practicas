//declaraciond del arreglo
var arregloNumeros = [2, 4, 6, 4, 2, 5, 7, 3, 7, 9, 5, 2, 7, 8, 1]
var suma = 0;
var media = 0;
var mediana = 0;
var mitad = Math.floor(arregloNumeros.length / 2);
console.log("El arreglo presente es: " + arregloNumeros);
arregloNumeros.forEach(function(numero) {
  suma += numero;
});

console.log("La suma del arreglo es: " + suma);

//media
for (var i = 0; i < arregloNumeros.length; i++) {
  media = media + arregloNumeros[i];
}
media = media / arregloNumeros.length;

console.log("La media calculada del arreglo es: " + media);

//mediana
	if (arregloNumeros.length % 2 == 0) {
    	mediana = (arregloNumeros[mitad - 1] + arregloNumeros[mitad]) / 2;
	} else {
    	mediana = arregloNumeros[mitad];
	}

console.log("La mediana calculada del arreglo es: " + mediana);
