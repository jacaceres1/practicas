console.log("¡Hola!");
/*Comentario en bloque*/
//cometario en linea
//declaracion de variable
let numero = 5;
let letra = "hola Mundo";
let a=32;
let b=2;
console.log("Imprimo un numero: "+numero);
console.log("Imprimo una variable: "+letra);
console.log("La suma es :"+(a+b));
//postincremento
console.log("Variable a");
console.log(a);
console.log("Incremento pero no imprime");
console.log((a++));
console.log("Imprime el incremento");
console.log(a);

//preincremento
console.log("Variable a");
console.log(a);
console.log("Incremento e imprime");
console.log((++a));
console.log("Imprime el incremento");
console.log(a);

//uppercase para hacer en mayusculas todod
console.log(letra.toUpperCase());

//propiedad para verificar el tamaño de las palabras
console.log(letra.length);

//Salto de linea

//posicion de la letra m
let mun = "hola mundo estudiantes";
console.log("Posicionn de la palabra Hola:"+ mun.indexOf('hola'));

//metodo que permite reemplzar palabras ---> replace ('<texto a cambiar>', ' <texto reemplazo>')
console.log("frase sin reemplazo :"+mun);
console.log("metodo de reemplzar: "+mun.replace('mundo','mundito'));

//metodo para extraer caracteres desdeuna posiciona  otra
//substring(posicionOrigen[,posiciondestino])
let saludo="Hola mundo";
console.log("tamanio de la vraible saludo: "+saludo.length);
console.log("Uso substring: "+ saludo.substring(5));
console.log("Uso substring con dos parametros: "+ saludo.substring(5,8)+"-----");
console.log("Uso substring con dos parametros: "+ saludo.substring(5,1)+"-----");
