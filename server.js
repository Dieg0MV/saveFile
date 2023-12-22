const multer = require('multer')
const express = require('express')
const objets = require('./app.js')

//configuraciones para el guardado del archivo 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, objets.path.join(__dirname, './upload/')
)},
    filename:function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({storage:storage});


//root
objets.app.use('/', express.static(objets.path.join(__dirname,'cliente/public'))); 
// this is where your built react js files are)
objets.app.get('/', (req, res) => {
    res.render(objets.path.join( __dirname + '/cliente/public/index.html'));
});


//Ruta para manejar la solicitud POST desde el frontend
objets.app.use(objets.cors())
objets.app.use(objets.express.urlencoded({extended: true}));
objets.app.post('/api', upload.single('fileExcel'), (req, res) => {
    //const dataFromFrontend = req.body;
    const fileds = req.file 
    console.log(fileds)
    // Enviar una respuesta exitosa
    res.status(200).json({ message: 'Datos recibidos correctamente' });
   
});


objets.io.on('connect', socket =>{
    console.log(socket.id)
});

objets.server.listen(5000, function () {
    console.log('http://localhost:5000');   
    console.log('para detener el servido use  ctrl+C')
    
})