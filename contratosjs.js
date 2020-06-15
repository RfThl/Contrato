console.log('Sies');
console.log('Sies');
	// OCULTAR PARTES 2 Y 3 //
document.getElementsByClassName('parte2')[0].style.display  =  'none'; 
document.getElementsByClassName('parte3')[0].style.display  =  'none'; 

var ParteActual = 1;

var NumVendedores = 1;
var Vendedor1 = 'f';
var Vendedor2 = 'f';
var Vendedor3 = 'f';
var Vendedor4 = 'f';

var NumCompradores = 1;
var comprador1 = 'm';
var comprador2 = 'm';
var comprador3 = 'm';
var comprador4 = 'm';

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
		NumVendedores = 1;
		document.getElementsByClassName('vendedor1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('vendedor2')[0].style.display  =  'none'; 
	}
	
	if (nvendedores.value == 2){
		NumVendedores = 2;
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
		Vendedor2 = 'm';
		document.getElementsByClassName('VM2')[0].style.display  =  'inline'; 
		document.getElementsByClassName('VF2')[0].style.display  =  'none'; 
	}
	if (TipoDeVendedor2.value === 'fisica'){
		Vendedor2 = 'f';
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
		NumCompradores = 1;
		document.getElementsByClassName('comprador1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('comprador2')[0].style.display  =  'none'; 
	}
	if (ncompradores.value == 2){
		NumCompradores = 2;
		document.getElementsByClassName('comprador1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('comprador2')[0].style.display  =  'inline'; 
	}
}

TipoDeComprador1.onclick = function(){
//
	console.log(TipoDeComprador1.value);
	if (TipoDeComprador1.value === 'moral'){
		comprador1 = 'm';
		document.getElementsByClassName('CM1')[0].style.display  =  'inline'; 
		document.getElementsByClassName('CF1')[0].style.display  =  'none'; 
	}
	if (TipoDeComprador1.value === 'fisica'){
		comprador1 = 'f';
		document.getElementsByClassName('CM1')[0].style.display  =  'none'; 
		document.getElementsByClassName('CF1')[0].style.display  =  'inline'; 
	}
}

TipoDeComprador2.onclick = function(){
//
	console.log(TipoDeComprador1.value);
	if (TipoDeComprador2.value === 'moral'){
		comprador2 = 'm';
		document.getElementsByClassName('CM2')[0].style.display  =  'inline'; 
		document.getElementsByClassName('CF2')[0].style.display  =  'none'; 
	}
	if (TipoDeComprador2.value === 'fisica'){
		comprador2 = 'f';
		document.getElementsByClassName('CM2')[0].style.display  =  'none'; 
		document.getElementsByClassName('CF2')[0].style.display  =  'inline'; 
	}
}


////////////////////////////////////////  ////////////////////////////////////////


const section = document.querySelector('.campos')
//section.remove();
const camponec = document.querySelectorAll('.camponecesario')
//camponec.forEach((camponec) => camponec.style.background = 'red');


		//	//	//	//						//	//	//	//
		//	//	//	//// Captura de datos ////	//	//	//
		//	//	//	//						//	//	//	//

const estado = document.querySelector('#estado')
const municipio = document.querySelector('#municipio')
const fecha = document.querySelector('#fecha')
	//Vendedores 
const VF1nomb = document.querySelector('#VF1-nombre')
//const VF1Sex = document.querySelector('#VF1-nombre')
const VF2nomb = document.querySelector('#VF2-nombre')
//const VF1Sex = document.querySelector('#VF1-nombre')

// Vendedor moral 1
const VM1nomb = document.querySelector('#VM1-nombre')
const VM1num = document.querySelector('#VM1-numero')
const VM1fecha = document.querySelector('#VM1-fecha')
const VM1nombRep = document.querySelector('#VM1-nombre-representante')

// Vendedor moral 2
const VM2nomb = document.querySelector('#VM2-nombre')
const VM2num = document.querySelector('#VM2-numero')
const VM2fecha = document.querySelector('#VM2-fecha')
const VM2nombRep = document.querySelector('#VM2-nombre-representante')

	//Compradores 
const CF1nomb = document.querySelector('#CF1-nombre')
//const CF1Sex = document.querySelector('#CF1-nombre')
const CF2nomb = document.querySelector('#CF2-nombre')
//const CF1Sex = document.querySelector('#CF1-nombre')

// Vendedor moral 1
const CM1nomb = document.querySelector('#CM1-nombre')
const CM1num = document.querySelector('#CM1-numero')
const CM1fecha = document.querySelector('#CM1-fecha')
const CM1nombRep = document.querySelector('#CM1-nombre-representante')

// Vendedor moral 2
const CM2nomb = document.querySelector('#CM2-nombre')
const CM2num = document.querySelector('#CM2-numero')
const CM2fecha = document.querySelector('#CM2-fecha')
const CM2nombRep = document.querySelector('#CM2-nombre-representante')

const primerParrafo = document.querySelector('#primerParrafo')

fecha.addEventListener('submit', onSubmit);

	//	// BOTON NEXT //	//
const next = document.querySelector('.next')

next.onclick = function(){
	
	if (ParteActual === 1){ //Si es la primera parte revisar que los campos tengan informacion
		listo = true;
		
		console.log('algo');
		if(fecha.value === '') {
		listo = false;
		fecha.style.background = 'pink';
		console.log('algomas');
		}else{fecha.style.background = 'white';}
		
		// Validar vendedores
		if (Vendedor1 === 'm'){ // 
			if(VM1nomb.value === '') {
			listo = false;
			VM1nomb.style.background = 'pink';
			console.log('algomas');
			}else{VM1nomb.style.background = 'white';}		
			
			if(VM1num.value === '') {
			listo = false;
			VM1num.style.background = 'pink';
			console.log('algomas');
			}else{VM1num.style.background = 'white';}	
			
			if(VM1fecha.value === '') {
			listo = false;
			VM1fecha.style.background = 'pink';
			console.log('VM1fecha');
			}else{VM1fecha.style.background = 'white';}	
			
			if(VM1nombRep.value === '') {
			listo = false;
			VM1nombRep.style.background = 'pink';
			console.log('algomas');
			}else{VM1nombRep.style.background = 'white';}		
		}		
		else if(Vendedor1 === 'f'){
			if(VF1nomb.value === '') {
			listo = false;
			VF1nomb.style.background = 'pink';
			console.log('VM1nombRep');
			}else{VF1nomb.style.background = 'white';}
		}
		// segundo vendedor
		if (NumVendedores === 2){
			if (Vendedor2 === 'm'){ // 
				if(VM2nomb.value === '') {
				listo = false;
				VM2nomb.style.background = 'pink';
				console.log('VM2nomb');
				}else{VM2nomb.style.background = 'white';}		
				
				if(VM2num.value === '') {
				listo = false;
				VM2num.style.background = 'pink';
				console.log('VM2num');
				}else{VM2num.style.background = 'white';}	
				
				if(VM2fecha.value === '') {
				listo = false;
				VM2fecha.style.background = 'pink';
				console.log('VM2fecha');
				}else{VM2fecha.style.background = 'white';}	
				
				if(VM2nombRep.value === '') {
				listo = false;
				VM2nombRep.style.background = 'pink';
				console.log('VM2nombRep');
				}else{VM2nombRep.style.background = 'white';}		
			}		
			else if(Vendedor2 === 'f'){
				if(VF2nomb.value === '') {
				listo = false;
				VF2nomb.style.background = 'pink';
				console.log('VF2nomb');
				}else{VF2nomb.style.background = 'white';}
			}		
		}
		
		// Validar compradores
		if (comprador1 === 'm'){ // 
			if(CM1nomb.value === '') {
			listo = false;
			CM1nomb.style.background = 'pink';
			console.log('CM1nomb');
			}else{CM1nomb.style.background = 'white';}		
			
			if(CM1num.value === '') {
			listo = false;
			CM1num.style.background = 'pink';
			console.log('CM1num');
			}else{CM1num.style.background = 'white';}	
			
			if(CM1fecha.value === '') {
			listo = false;
			CM1fecha.style.background = 'pink';
			console.log('CM1fecha');
			}else{CM1fecha.style.background = 'white';}	
			
			if(CM1nombRep.value === '') {
			listo = false;
			CM1nombRep.style.background = 'pink';
			console.log('CM1nombRep');
			}else{CM1nombRep.style.background = 'white';}		
		}		
		else if(comprador1 === 'f'){
			if(CF1nomb.value === '') {
			listo = false;
			CF1nomb.style.background = 'pink';
			console.log('CF1nomb');
			}else{CF1nomb.style.background = 'white';}
		}
		// segundo comprador
		if (NumCompradores === 2){
			if (comprador2 === 'm'){ // 
				if(CM2nomb.value === '') {
				listo = false;
				CM2nomb.style.background = 'pink';
				console.log('CM2nomb');
				}else{CM2nomb.style.background = 'white';}		
				
				if(CM2num.value === '') {
				listo = false;
				CM2num.style.background = 'pink';
				console.log('CM2num');
				}else{CM2num.style.background = 'white';}	
				
				if(CM2fecha.value === '') {
				listo = false;
				CM2fecha.style.background = 'pink';
				console.log('CM2fecha');
				}else{CM2fecha.style.background = 'white';}	
				
				if(CM2nombRep.value === '') {
				listo = false;
				CM2nombRep.style.background = 'pink';
				console.log('CM2nombRep');
				}else{CM2nombRep.style.background = 'white';}		
			}		
			else if(comprador2 === 'f'){
				if(CF2nomb.value === '') {
				listo = false;
				CF2nomb.style.background = 'pink';
				console.log('CF2nomb');
				}else{CF2nomb.style.background = 'white';}
			}		
		}
		
		if (listo === true){ //Si todo va correctamente ir a la siguiente seccion
			ParteActual = 2;
			document.getElementsByClassName('parte1')[0].style.display  =  'none'; 
			document.getElementsByClassName('parte2')[0].style.display  =  'inline'; 
		}	
	} //Fin de acciones para parte 1
	
	else if (ParteActual === 2){
		//listo = true;
			
		/*if(fecha.value === '') {
			listo = false;
			fecha.style.background = 'pink';
			console.log('algomas');
		}else{fecha.style.background = 'white';}
			*/
			ParteActual = 3;
			document.getElementsByClassName('parte2')[0].style.display  =  'none'; 
			document.getElementsByClassName('parte3')[0].style.display  =  'inline'; 
	} //Fin de acciones para parte 2
		
	/*if (listo == true){
		//primerParrafo.innerHTML = "En Tijuana, Baja California, el dos de abril de dos mil catorce, por una parte en calidad de “VENDEDORA”, MARIA GARCIA GARCÍA, y por la otra como la “COMPRADORA”, DISTRIBUIDORA FRONTERA S. A. DE C.V., representada por FRANCISCO PANTERA, convienen celebrar un contrato de compraventa al tenor de las siguientes declaraciones y cláusulas:";
		primerParrafo.innerHTML = "En " + municipio.value + ", " + estado.value + " el " + fecha.value + 
		" por una parte en calidad de “VENDEDORA”, " + nombre.value + ", y por la otra como la “COMPRADORA”, " + combrecomprador.value + ", representada por " + nombrerepresentante.value + ", convienen celebrar un contrato de compraventa al tenor de las siguientes declaraciones y cláusulas:" ;
		//camponec.forEach((camponec) => camponec.disabled = true);	
	}*/
};

	//	// BOTON PREV //	//
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
