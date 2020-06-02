console.log('Sies');
console.log('Sies');
const section = document.querySelector('.campos')
//section.remove();

var listo = false;
const camponec = document.querySelectorAll('.camponecesario')

//camponec.forEach((camponec) => camponec.style.background = 'red');

const fecha = document.querySelector('#fecha')
const nombre = document.querySelector('#nombre')
const combrecomprador = document.querySelector('.combrecomprador')
const numero = document.querySelector('#numero')
const fechamoral = document.querySelector('#fechamoral')
const nombrerepresentante = document.querySelector('#nombrerepresentante')
const primerParrafo = document.querySelector('#primerParrafo')
const municipio = document.querySelector('#municipio')

const estado = document.querySelector('#estado')
//const municipio = document.querySelector('#municipio')
//const municipio = document.querySelector('#municipio')
//const municipio = document.querySelector('#municipio')


fecha.addEventListener('submit', onSubmit);

const next = document.querySelector('.next')

next.onclick = function(){
	//preventDefault();
	listo = true;
	console.log('algo');
	if(fecha.value === '') {
		listo = false;
		fecha.style.background = 'red';
	console.log('algomas');
	}else{fecha.style.background = 'white';}

	if(nombre.value === '') {
		listo = false;
		nombre.style.background = 'red';
	console.log('algomas');
	}else{nombre.style.background = 'white';}

	if(combrecomprador.value === '') {
		listo = false;
		combrecomprador.style.background = 'red';
	console.log('algomas');
	}else{combrecomprador.style.background = 'white';}

	if(numero.value === '') {
		listo = false;
		numero.style.background = 'red';
	console.log('algomas');
	}else{numero.style.background = 'white';}

	if(fechamoral.value === '') {
		listo = false;
		fechamoral.style.background = 'red';
	console.log('algomas');
	}else{fechamoral.style.background = 'white';}


	if(nombrerepresentante.value === '') {
		listo = false;
		nombrerepresentante.style.background = 'red';
	console.log('algomas');
	}else{nombrerepresentante.style.background = 'white';}
	if (listo == true){
		//primerParrafo.innerHTML = "En Tijuana, Baja California, el dos de abril de dos mil catorce, por una parte en calidad de “VENDEDORA”, MARIA GARCIA GARCÍA, y por la otra como la “COMPRADORA”, DISTRIBUIDORA FRONTERA S. A. DE C.V., representada por FRANCISCO PANTERA, convienen celebrar un contrato de compraventa al tenor de las siguientes declaraciones y cláusulas:";
		primerParrafo.innerHTML = "En " + municipio.value + ", " + estado.value + " el " + fecha.value +
		" por una parte en calidad de “VENDEDORA”, " + nombre.value + ", y por la otra como la “COMPRADORA”, " + combrecomprador.value + ", representada por " + nombrerepresentante.value + ", convienen celebrar un contrato de compraventa al tenor de las siguientes declaraciones y cláusulas:" ;
		camponec.forEach((camponec) => camponec.disabled = true);
	}
	};




//<p>En Tijuana, Baja California, el dos de abril de dos mil catorce, por una parte en calidad de “VENDEDORA”, MARIA GARCIA GARCÍA, y por la otra como la “COMPRADORA”, DISTRIBUIDORA FRONTERA S. A. DE C.V., representada por FRANCISCO PANTERA, convienen celebrar un contrato de compraventa al tenor de las siguientes declaraciones y cláusulas:
			//</p>
function onSubmit(e) {
  e.preventDefault();

  if(fecha.value === '') {
    // alert('Please enter all fields');
	console.log('algo');
  } else {
    // Create new list item with user
	console.log('otra');
    const li = document.createElement('li');

  }
}












//;
//camponec.addEventListener('submit', onSubmit);
//const next = document.querySelector('.next')

/*




next.addEventListener('click', (e) => {
	e.preventDefault();
	next.style.background = 'red';
}



function onSubmit (e) {
	e.preventDefault();
	console.log('sirve');
}

*/
