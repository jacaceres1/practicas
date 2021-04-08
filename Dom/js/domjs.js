/*recuperar texto a traves del ID*/
//devuelve nulll ya que como se aprecia es por cascada
const titulo =  document.getElementById('titulo');
console.log(titulo);
titulo.innerHTML = "Manipulado desde JS";
titulo.textContent = "Manipulado desde JS con textContent";

//recuperar texto a traves de la class
const items = document.getElementsByClassName('item');
console.log(items);
console.log(items[2]);

//Mnipular parrafo
const parrafo = document.getElementsByClassName('parrafo');
console.log(parrafo);
for (i = 0; i < parrafo.length; i++) {
  parrafo[i].textContent ="hola mundo!!!, acabo de cambiar el parrafo: "+(i+1);
}

//Metodos Modernos
// se trabaja a traves de css
// .querySelector
const titulo1 = document.querySelector(' .titulo');
console.log(titulo1);

//imprimir unicamente uno
const parrafo1 = document.querySelector(' .parrafo');
console.log(parrafo1);

//.querySelectorall
const parrafo2 = document.querySelectorAll(' .parrafo');
for( i=0; i<parrafo2.length;i++){
  parrafo2[i].innerHTML = "cAMBIO EL PARRAFO CON QUERY SELECTOR";
}

const div = document.querySelector('#page');
console.log(div.hasAttribute("data-number")); //true data numbre existe
console.log(div.hasAttributes());//true tiene 3 atributos
console.log(div.getAttributeNames());//[id , data nmber, class]
console.log(div.getAttribute("id")); // no ddvuelve nada
console.log(div.removeAttribute("id"));// <>
console.log(div.setAttribute("id","page")); //vuleve a añadirlo
console.log(div);
