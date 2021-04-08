//declaracion de la clase
class Persona {
  //Constructor
  Constructor(nombre, apellido, anios){
    console.warn("Ha nacido una persona");
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = anios;
  }

  //it's clean
  saludar(){
    return "hola";
  }

  //method whit param
  despedir(nombre){
    return `chao ${nombre}`;
  }

  //metodo estatico
  static alimentar(){
    return `He almorzado`;
  }

  //metodo vivir
  static vivir(){
    return `Estoy vivo`;
  }

  //metodo con propiedades
  quienSoy(){
    return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} anios`
  }


}


//Instanciar un objeto de tipo persona
const Martha = new Persona('Martha', 'Gallegos', '17');

//call the method
console.log(Martha.saludar());
console.log(Martha.despedir("Juan"));

//call the static method
console.log(Persona.almorzar());

//metodo que imprime las propiedades de laclase Persona
console.log(Martha.quienSoy());

//crear otro objeto sin parametros
const Desconocido = new Persona();
console.log(Desconocido.quienSoy);
