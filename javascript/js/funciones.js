//fucniones sin parametros

//declaracion de la fucnon "saludar"
function saludar(){
  //contenido de la funcion
  console.log("Hola, soy una funcion") ;
}

//declaracion de la funcion tabla del uno
function tablaDelUno(){
  for(i=0;i <=10;i++){
    console.log("1 x",i,"=",1*i);
  }
}

//funcion con parametros
function tablaDelUnoHasta(hasta){
  for(i = 0;i<=hasta;i++){
    console.log("1 x",i,"=",1*i);
  }
}

//declaracion
function tablaMultiplicar(tabla, hasta){
  for(i=0;i<=hasta;i++){
    console.log(tabla,"x",i,"=",tabla*i);
  }
}

//ejecucion de la funcion
saludar();

console.log("");
for(let i=0;i<3;i++){
  console.log("---------------------------");
  tablaDelUnoHasta(5);
}

tablaMultiplicar(2,5);
