const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        // demandOption: true,
        describe: 'Base de la tabla de Multiplicar',
    })
    .option('l', {
        alias: 'listar',
        default: false,
        type: 'boolean',
        // demandOption: true,
        describe: 'Listar la tabla',
    })
    .option('h', {
        alias: 'hasta',
        default: 10,
        type: 'number',
        // demandOption: true,
        describe: 'limite de la tabla',
    })
    .check((argv, opciones) => {

        if (isNaN(argv.b)) {

            throw 'La base tiene que ser un numero';
        }

        return true;
    })
    .argv;


    module.exports = argv;