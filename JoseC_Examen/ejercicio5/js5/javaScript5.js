var num, i, auxiliar = 1;

function generador() {
num = document.getElementById("valor").value;
  if (num % 2 == 0) {
    var crear = document.createElement('div');
    for (i = 1; i <= num; i++) {
      var texto = document.getElementById("divs").innerHTML += "<br>" + "<button [ onclick= mostrar() ]> Caja" + new Number(i) + "<br>"
      auxiliar += 1;

    }
  }else{
    for (i = 1; i <= num; i++) {
      var texto = document.getElementById("divs").innerHTML += "<br>" + "<input [ type=checkbox ]> Caja" + new Number(i) + "<br>"
      auxiliar += 1;
      alert('Check'+Number(i))
  }
}
}

function mostrar(){
  for(i = 1; i <= num; i++){
    alert('Boton'+Number(i));
  }

}
