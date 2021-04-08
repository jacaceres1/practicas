// Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
// factorial
function factorial(valor){
  for (i = valor-1; i >= 1; i--) {
       valor *= i;
  }
  return valor;
}

//ejecucion
 let ingreso =  prompt("Ingrese su numero: ");
factorial(ingreso);
console.log(`El factorial de ${ingreso} es :` + factorial(ingreso));


//Ejercicio 2
let suma=0;
let cont = 0;

while (suma<=50) {
  suma += parseInt(prompt("Introduce numeros a la suma correspondiente:"))
  cont++
}

console.log(`La suma ha sido de ${suma}`);
console.log("La suma ha pasado de 50");
console.log(`las veces que se han ingresado numeros es: ${cont}`);


//Ejercicio 3

class Libro {
  //disponde de titulo autor anio y gener
  Constructor(titulo, autor, anio, genero){
    this.titulo = titulo
    this.autor = autor
    this.anio = anio
    this.genero = genero
  }

  //metodo que devuelve la informacion del libro
  inforLibro(){
    return `El libro ingresado tiene como titulo " ${titulo} " corresponde al autor " ${autor} ", data del año " ${anio} " y su genero es de " ${genero} "`
  }

}

//ejecucion de la clase libro
let titulo;
let autor;
let anio;
let genero;
  titulo = prompt("Ingresar el Titulo:");
  autor = prompt("Ingresar el Autor:");
  anio = prompt("Ingresar el Año`:");
  genero = prompt("Ingresar el Genero:");
const nuevo = new Libro(titulo,autor,anio,genero);
console.log(nuevo.inforLibro());
