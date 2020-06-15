console.log('Sies');
console.log('Sies');
// OCULTAR PARTES 2 Y 3 //
document.getElementsByClassName('parte2')[0].style.display  =  'none'; 
document.getElementsByClassName('parte3')[0].style.display  =  'none'; 

var ParteActual = 1;

var compradores = 1;
var comprador1 = 'm';
var comprador2 = 'm';
var comprador3 = 'm';
var comprador4 = 'm';

var vendedores = 1;
var Vendedor1 = 'm';
var Vendedor2 = 'm';
var Vendedor3 = 'm';
var Vendedor4 = 'm';

var listo = false;

//////////////////////////////////////// VENDEDORES ////////////////////////////////////////
const nvendedores = document.querySelector('#cantidad-de-vendedores')
const TipoDeVendedor1 = document.querySelector('#tipo-de-persona-vendedor1')
const TipoDeVendedor2 = document.querySelector('#tipo-de-persona-vendedor2')

document.getElementsByClassName('vendedor2')[0].style.display  =  'none'; 
document.getElementsByClassName('VM1')[0].style.display  =  'none'; 
document.getElementsByClassName('VM2')[0].style.display  =  'none'; 

nvendedores.onclick = function(){
//
	console.log(nvendedores.value);
	if (nvendedores.value == 1){
		document.getElementsByClassName('vendedor1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('vendedor2')[0].style.display  =  'none'; 
	}
	
	if (nvendedores.value == 2){
		document.getElementsByClassName('vendedor1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('vendedor2')[0].style.display  =  'inline'; 
	}
}

TipoDeVendedor1.onclick = function(){
//
	console.log(TipoDeVendedor1.value);
	if (TipoDeVendedor1.value === 'moral'){
		Vendedor1 = 'm';
		document.getElementsByClassName('VM1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('VF1')[0].style.display  =  'none'; 
	}
	if (TipoDeVendedor1.value === 'fisica'){
		Vendedor1 = 'f';
		document.getElementsByClassName('VM1')[0].style.display  =  'none'; 
		document.getElementsByClassName('VF1')[0].style.display  =  'inline'; 
	}
}

TipoDeVendedor2.onclick = function(){
//
	console.log(TipoDeVendedor2.value);
	if (TipoDeVendedor2.value === 'moral'){
		document.getElementsByClassName('VM2')[0].style.display  =  'inline'; 
		document.getElementsByClassName('VF2')[0].style.display  =  'none'; 
	}
	if (TipoDeVendedor2.value === 'fisica'){
		document.getElementsByClassName('VM2')[0].style.display  =  'none'; 
		document.getElementsByClassName('VF2')[0].style.display  =  'inline'; 
	}
}

//////////////////////////////////////// COMPRADORES ////////////////////////////////////////
const ncompradores = document.querySelector('#cantidad-de-compradores')
const TipoDeComprador1 = document.querySelector('#tipo-de-persona-comprador1')
const TipoDeComprador2 = document.querySelector('#tipo-de-persona-comprador2')

document.getElementsByClassName('comprador2')[0].style.display  =  'none'; 
document.getElementsByClassName('CM1')[0].style.display  =  'none'; 
document.getElementsByClassName('CM2')[0].style.display  =  'none'; 

ncompradores.onclick = function(){
//
	console.log(ncompradores.value);
	if (ncompradores.value == 1){
		document.getElementsByClassName('comprador1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('comprador2')[0].style.display  =  'none'; 
	}
	if (ncompradores.value == 2){
		document.getElementsByClassName('comprador1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('comprador2')[0].style.display  =  'inline'; 
	}
}

TipoDeComprador1.onclick = function(){
//
	console.log(TipoDeComprador1.value);
	if (TipoDeComprador1.value === 'moral'){
		document.getElementsByClassName('CM1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('CF1')[0].style.display  =  'none'; 
	}
	if (TipoDeComprador1.value === 'fisica'){
		document.getElementsByClassName('CM1')[0].style.display  =  'none'; 
		document.getElementsByClassName('CF1')[0].style.display  =  'inline'; 
	}
}

TipoDeComprador2.onclick = function(){
//
	console.log(TipoDeComprador1.value);
	if (TipoDeComprador2.value === 'moral'){
		document.getElementsByClassName('CM2')[0].style.display  =  'inline'; 
		document.getElementsByClassName('CF2')[0].style.display  =  'none'; 
	}
	if (TipoDeComprador2.value === 'fisica'){
		document.getElementsByClassName('CM2')[0].style.display  =  'none'; 
		document.getElementsByClassName('CF2')[0].style.display  =  'inline'; 
	}
}

////////////////////////////////////////  ////////////////////////////////////////
//////////////////////////////////////// CAPTURA DE DATOS ////////////////////////////////////////

const section = document.querySelector('.campos')
//section.remove();

const camponec = document.querySelectorAll('.camponecesario')

//camponec.forEach((camponec) => camponec.style.background = 'red');

const fecha = document.querySelector('#fecha')
//Vendedores 
const VF1nomb = document.querySelector('#VF1-nombre')
//const VF1Sex = document.querySelector('#VF1-nombre')
const VF2nomb = document.querySelector('#VF2-nombre')
//const VF1Sex = document.querySelector('#VF1-nombre')

// Vendedor moral
const VM1nomb = document.querySelector('#VM1-nombre')
const VM1num = document.querySelector('#VM1-numero')
const VM1fecha = document.querySelector('#VM1-fecha')
const VM1nombRep = document.querySelector('#VM1-nombre-representante')

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

	// BOTON NEXT //
const next = document.querySelector('.next')

next.onclick = function(){
	
	if (ParteActual === 1){
		listo = true;
		
		console.log('algo');
		if(fecha.value === '') {
		listo = false;
		fecha.style.background = 'red';
		console.log('algomas');
		}else{fecha.style.background = 'white';}
			
		/*if (vendedor1 === 'f'){
			if(VF1nomb.value === '') {
			listo = false;
			VF1nomb.style.background = 'red';
			console.log('algomas');
			}else{VF1nomb.style.background = 'white';}					
		}
		else {
			if(VM1nomb.value === '') {
			listo = false;
			VF1nomb.style.background = 'red';
			console.log('algomas');
			}else{VF1nomb.style.background = 'white';}
		}*/		
		
		if (listo === true){ //Si todo va correctamente ir a la siguiente seccion
			ParteActual = 2;
			document.getElementsByClassName('parte1')[0].style.display  =  'none'; 
			document.getElementsByClassName('parte2')[0].style.display  =  'inline'; 
		}		
	}
	else if (ParteActual === 2){
			ParteActual = 3;
			document.getElementsByClassName('parte2')[0].style.display  =  'none'; 
			document.getElementsByClassName('parte3')[0].style.display  =  'inline'; 
	}
		
	//Si es la primera parte revisar que los campos tengan informacion
	
	console.log('algo');
		
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

	// BOTON PREV //
const prev = document.querySelector('.prev')

prev.onclick = function(){
	if (ParteActual === 2){
			ParteActual = 1;
			document.getElementsByClassName('parte2')[0].style.display  =  'none'; 
			document.getElementsByClassName('parte1')[0].style.display  =  'inline'; 
	}
	else if (ParteActual === 3){
			ParteActual = 2;
			document.getElementsByClassName('parte3')[0].style.display  =  'none'; 
			document.getElementsByClassName('parte2')[0].style.display  =  'inline'; 
	}	
}

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
