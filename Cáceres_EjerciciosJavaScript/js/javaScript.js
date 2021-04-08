//pedida de variables para el ejercicio 1
let nombre;
let edad;

nombre = prompt("Ingrese su nombre al Registro: ");
edad = parseInt(prompt('Ingrese su edad al Registro: '));
let edad2= edad+1;
console.log('Hola! '+nombre+',tienes '+edad+' años y el año que viene tendrás '+edad2+" años");

console.log("---------------------------------------------------------------------------------------");
console.log("");
//Ejercicio 2
let Areas = prompt('Introduce la figura geómetrica: 1.Triangulo  2.Rectangulo  3. Circulo');

let base;
let altura;
let radio;

switch(Areas){
    case 'triangulo':
        base=prompt('Introduce la base del triángulo a evaluar')
        altura=prompt('Introduce la altura del triángulo a evaluar')
        console.log(`El área del triángulo es ${(base*height)/2}`);
        console.log("");
        console.log("              *");
        console.log("             ***");
        console.log("            *****");
        console.log("           *******");
        console.log("          *********");
        console.log("         ***********");
        console.log("        *************");
        console.log("       ***************");
        console.log("      *****************");
        console.log("     *******************");
        console.log("    *********************");
        console.log("   ***********************");
        console.log("  *************************");
        console.log(" ***************************");
        console.log("");
        break
    case  'rectangulo':
        base=prompt('Introduce la base del rectángulo a evaluar')
        altura=prompt('Introduce la altura del rectángulo')
        console.log(`El área del rectángulo es ${base*height}`);
        console.log("");
        console.log("*************************");
        console.log("*************************");
        console.log("*************************");
        console.log("*************************");
        console.log("*************************");
        console.log("*************************");
        console.log("");
        break
    case 'circulo':
        radio=prompt('Introduce el radio del círculo a evaluar')
        console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
        console.log("");
        console.log("          *******");
        console.log("      *************** ");
        console.log("    ******************* ");
        console.log("  *********************** ");
        console.log(" *************************");
        console.log("***************************");
        console.log("***************************");
        console.log("***************************");
        console.log("***************************");
        console.log(" *************************");
        console.log("  *********************** ");
        console.log("    ******************* ");
        console.log("          *******");
        console.log("");
        break
    default: console.log('La figura geométrica no es válida, ya que no existe dentro del listado');
}

console.log("---------------------------------------------------------------------------------------");
console.log("");

//ejercicio 3 calculo de impar o par

let numero = parseInt(prompt('Introduce un número a evaluar'))

for(let i=1; i<=numero; i++){
    if(i%2==0){
        console.log(`${i} - es par`);
    }else{
        console.log(`${i} - es impar`);
    }
}
