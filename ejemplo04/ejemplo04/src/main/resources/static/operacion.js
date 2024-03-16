function suma(){
	
	let valor1 = document.getElementById("valor1").value;
	let valor2 = document.getElementById("valor2").value;
	
	let total = parseFloat(valor1) + parseFloat(valor2);
	
	document.form1.resultado.value = total;
}
