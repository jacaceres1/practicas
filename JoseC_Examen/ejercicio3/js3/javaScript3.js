//ingreso de la palabra
let ingresoPalabra = prompt('Introduce una palabra').toLowerCase()

let consonantes=0
let vocales = 0
let volcalesArray = ["a",'e','i','o',"u"]
for(const letra of ingresoPalabra){
    if(volcalesArray.indexOf(letra) !== -1)
    vocales++
    else consonantes++
}

console.log(`La palabra ${ingresoPalabra} dispone de:  ${vocales} vocales`);
console.log(`La palabra ${ingresoPalabra} dispone de: ${consonantes} consonantes `);
console.log(`La palabra ${ingresoPalabra} dispone de una longitud de ${ingresoPalabra.length} letras`);
