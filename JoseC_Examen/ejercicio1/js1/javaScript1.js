//declaracion del array
let coloresArray = ["azul","amarillo","rojo","verde","rosa"]

//ingreso o tomado por un pront
let ingreso = prompt("Ingresa un color al azar").toLowerCase();

//verificacion del color

if(coloresArray.indexOf(ingreso) !== -1){
  console.log("El color que se ingreso esta dentro del array");
}else{
  console.log("Tu color no esta definido");
}
