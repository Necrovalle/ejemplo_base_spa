//*********************************
//*  EJEMPLO DE SISTEMA PARA UNA  *
//*   SINGLE PAGE APPLICATION     *
//*       POR: Necrovalle         *
//*********************************
//repositorio en gitHub:
//

//******************************************* DECLARACIONES
let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

//******************************** INICIALIZACION DEL SERVER
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use("/src", express.static('./src/'));

http.listen(3000, () => {
	notifyRegister(fileReg, 'Servidor en el puerto: 3000, activo');
});

//*********************************** COMUNICACION SOCKET.IO
io.on('connection', (socket) => {
	socket.on('msgClient', (data)=>{
		io.to(socket.id).emit('msgServer', 'Mensaje desde el servidor')
	});
});