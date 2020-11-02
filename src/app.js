//***************************
//*   CODIGO EN JAVASCRIPT  *
//*      EN EL CLIENTE      *
//*     POR: Necrovalle     *
//***************************

//********************************************* DECLARACIONES
const socket = io();
let BTN = document.getElementById('btn');

//***************************************** FUNCIONES PROPIAS
BTN.addEventListener('click', function(e){
	alert('Peticion al servidor');
	socket.emit('msgClient', 'mensaje');
});

//************************ CAPTURA DE COMINICACION DEL SERVER
socket.on('msgServer', function(data){
	alert(data);
});