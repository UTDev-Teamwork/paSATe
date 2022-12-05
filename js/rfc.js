const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ce8f53359mshf2636184c53563bp1df383jsn587eab38c72d',
		'X-RapidAPI-Host': 'jfhe88-rfc-generator-mexico.p.rapidapi.com'
	}
};

fetch('https://jfhe88-rfc-generator-mexico.p.rapidapi.com/?rapidapi-key=4ce8f53359mshf2636184c53563bp1df383jsn587eab38c72d/rest1/rfc/get?apellido_materno=GARCIA&apellido_paterno=HERNANDEZ&fecha=1988-03-17&nombre=JUAN%20FERNANDO&solo_homoclave=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));