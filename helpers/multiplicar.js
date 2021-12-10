
const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {

    try {

        let salida = '';
        let salida_log = '';

        for (let i = 1; i <= hasta; i++) {

            salida_log += `${base} ${colors.red('x')} ${i} ${colors.blue('=')}  ${i * base} \n`;
            salida     += `${base} x ${i} = ${i * base} \n`;
        }

        if(listar){
        console.log('#####################################')
        console.log(`             Tabla del ${base}       `)
        console.log('#####################################')
        
        
        
            console.log(salida_log)
            
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}