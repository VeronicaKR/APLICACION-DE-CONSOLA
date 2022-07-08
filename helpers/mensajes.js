const { resolve } = require('path');

require('colors');

const mostrarMenu= ()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log('=============='.red);
        console.log('Select a option'.green);
        console.log('==============\n'.red);
        console.log(`${'1'.white}.${'Crear tarea'.yellow}`);
        console.log(`${'2'.white}.${'Listar tareas'.magenta}`);
        console.log(`${'3'.white}.${'Listar tareas completadas'.red}`);
        console.log(`${'4'.white}.${'Listar tareas pendientes'.green}`);
        console.log(`${'5'.white}.${'Completar tareas'.blue}`);
        console.log(`${'6'.white}.${'Borrar tarea'.grey}`);
        console.log(`${'0'.white}.${'Salir'.black}`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleciona una opcion: ', (opt)=>{
            readline.close();
            resolve(opt);
        })
    });
};
const pausa = () =>{
    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Presione enter para continuar ', (opt)=>{
            readline.close();
            resolve();
        });
    }
    )}

module.exports={
    mostrarMenu,
    pausa
}