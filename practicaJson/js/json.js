
const o = '{"name": "Manz","year": "99"}';

//imprimir el objeto que proviene en formato Json
console.log(o);


//parsear -> converit rde un objetoa  datos
const datos = JSON.parse(o);
console.log(datos.name);
console.log(datos.year);


/////////////////////////////Inverso
const obj = { name: "Manz",age: 99, saludar: function(){ return "Hola!"}};
const str = JSON.stringify(obj);
console.log(str);
