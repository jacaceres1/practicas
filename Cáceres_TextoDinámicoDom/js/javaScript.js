var num,i,auxiliar=1;
function generador(){
	num = document.getElementById("valor").value;
  var crear = document.createElement('div');
  //estilos
  crear.style.background = "#5DEAA8";
  crear.style.height = "50px";
  crear.style.width = "350px";
  crear.style.padding = "20px";
  crear.style.border = "10px solid #43B17D";
  crear.style.margin = "50px auto 50px auto";
	for (i=1; i <= num; i++) {
		var texto = document.getElementById("divs").innerHTML+= "<br>"+"<input> Caja"+new Number(i)+"<br>"
		auxiliar+=1;

	}
}
