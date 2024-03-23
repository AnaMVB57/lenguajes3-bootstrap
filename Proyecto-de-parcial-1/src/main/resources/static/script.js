//Una institución desea comprar escritorios nuevos para sus 3 salones de clase, cada escritorio es para 2 alumnos.
//Crear 3 cajas de texto para ingresar el total de alumnos de cada salón y 
//mostrar en una cuarta caja de texto el total de escritorios que se deben comprar.

function calcularEscritorios(){
	
	let valor1 = parseFloat(document.getElementById("valor1").value);
	let valor2 = parseFloat(document.getElementById("valor2").value);
	let valor3 = parseFloat(document.getElementById("valor3").value);
	let totalEstudiantes = valor1 + valor2 + valor3;

	//Es impar
	if(valor1 == 1 || valor2 == 1 ||valor3 == 1){
		totalEstudiantes++;
		if((valor1 % 2) != 0){
			totalEstudiantes++;
		}else if((valor2 % 2) != 0){
			totalEstudiantes++;
		}else if((valor3 % 2) != 0){
			totalEstudiantes++;
		}
	}
	let numeroEscritorios = (totalEstudiantes / 2);
	document.form1.resultado.value = (numeroEscritorios).toFixed();
}
function validacion() {

  	let valor1 =  document.getElementById("valor1").value;
	let valor2 =  document.getElementById("valor2").value;
	let valor3 =  document.getElementById("valor3").value;

    //Indica que si el usuario ingresa valores diferentes a los especificados, muestre un mensaje.
    if (!(/^[0-9]{1,10}$/.test(valor1))) {
        alert("Error en los valores de la primera caja\nIngrese sólo números");
    }else if (!(/^[0-9]{1,10}$/.test(valor2))) {
        alert("Error en los valores de la segunda caja\nIngrese sólo números");
    }else if (!(/^[0-9]{1,10}$/.test(valor3))) {
        alert("Error en los valores de la tercera caja\nIngrese sólo números");
    }
    else {
        calcularEscritorios();
    }
}