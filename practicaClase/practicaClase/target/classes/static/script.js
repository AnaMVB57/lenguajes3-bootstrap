function horasAPagar(){
	
	let valorH = document.getElementById("valorH").value;
	let totalHoras = document.getElementById("totalHoras").value;
	
	let totalPagar = parseFloat(valorH) * parseFloat(totalHoras);
	
	document.form1.horasPagar.value = totalPagar;
}

function totalHoras(){
	
	let hora1 = document.getElementById("horaIng").value;
	let hora2 = document.getElementById("horaSal").value;

	let totalH = parseFloat(hora1) + parseFloat(hora2);
	
	document.form1.totalHoras.value = totalH;
}

function resultado(){
	
	totalHoras();
	horasAPagar();
	
}