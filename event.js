function getName() {
	//document.getElementById('hello').innerHTML = "Arifin";
	//console.log("Arifin");
	var txtName = document.getElementById('textName'); 
	document.getElementById('hello').innerHTML = txtName.value; //txtName.value karena txtName bagian dari fungsi getName
}