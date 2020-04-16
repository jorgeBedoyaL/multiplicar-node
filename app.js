// Importar paquete npm colors
// const colors = require(('colors'));
var colors = require('colors/safe');

//Importar argv del archivo yargs.js y usar de todo solo argv
const argv = require('./config/yargs').argv;

// Importamos la funcion crearArchivo y listarTabla
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// Tomar la posicion 0 del arreglo
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
//let base = 'abc';
//Enviar parametros
//console.log(process.argv)


/*
//obtener el dato
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base)
*/

//let argv2 = process.argv;
/* console.log(argv.base); */
//console.log('Limite', argv.limite);
// console.log(argv2)
//console.log(argv)
/*

    */