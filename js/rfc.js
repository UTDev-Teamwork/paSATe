const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ce8f53359mshf2636184c53563bp1df383jsn587eab38c72d',
		'X-RapidAPI-Host': 'jfhe88-rfc-generator-mexico.p.rapidapi.com'
	}
};

document.getElementById("btnContinuar").addEventListener("click", () => {
function obtener(){
	//Obtener los valores de los inputs
	const nombre=document.getElementById("nombre").value;
	const apellido_paterno=document.getElementById("apellido_paterno").value;
	const apellido_materno=document.getElementById("apellido_materno").value;
	const fecha=document.getElementById("fecha").value;

	//Obtener el valor seleccionado del dropdown con jquery
	$(function () {

		$('#ddlterminal').change(function () {
			var text = $(this).find('option:selected').text();
			alert(text);
		});
	});
}

fetch(`https://jfhe88-rfc-generator-mexico.p.rapidapi.com/rest1/rfc/get?apellido_materno=cuevas&apellido_paterno=rivas&fecha=2001-11-17&nombre=JOSE EDUARDO&solo_homoclave=0`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
});