
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs'); 
var colors = require('colors');

console.clear();

const base   = argv.b;
const listar = argv.l;
const hasta  = argv.h;




crearArchivo(base, listar, hasta)
.then(archivo => console.log(colors.green(`${archivo} creado con exito`)))
.catch(err => console.log("hubo un error: ", err));