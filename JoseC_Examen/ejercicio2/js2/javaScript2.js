function factorial(valor){
  for (i = valor-1; i >= 1; i--) {
       valor *= i;
  }
  return valor;
}

//ejecucion
 let ingreso =  prompt("Ingrese su numero: ");
if(ingreso > 0){
factorial(ingreso);
console.log(`El factorial de ${ingreso} es :` + factorial(ingreso));
}else{
  console.warn("El numero que se agrego no es mayor a 0 o es 0");;
}
