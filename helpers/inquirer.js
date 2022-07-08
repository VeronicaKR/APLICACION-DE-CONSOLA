require('colors');
const inquirer = require('inquirer');

const preguntas = [
	{
		type: 'list',
		name: 'opt',
		message: '¿Que quieres hacer?',
		choices: [
			{
				value: '1',
				name: `${'1.'.green} crear tarea`
			},
			{
				value: '2',
				name: `${'2.'.green}listar tareas`
			},
            {
				value: '3',
				name: `${'3.'.green}listar tareas completadas`
			},
            {
				value: '4',
				name: `${'4.'.green}listar tareas pendientes`
			},
            {
				value: '5',
				name: `${'5.'.green}completar tareas`
			},
            {
				value: '6',
				name: `${'6.'.green}borrar tarea`
			},
            {
				value: '0',
				name: `${'0.'.green}salir`
			}
		]
	}
];
const inquirerMenu = async () => {

	console.log('=============='.red);
	console.log('Select a option'.green);
	console.log('==============\n'.red);
	const {opt} = await inquirer.prompt(preguntas);
	return opt;
};

const pausa = async ()=>{
    const question =[
        {
            type:'input',
            name:'enter',
            message: 'Presione enter para continuar'
        }
    ];
	console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async(mensaje) => {
	const question = [
		{
			type:'input',
			name: 'desc',
			message: mensaje,
			validate(value){
				if(value.length === 0){
					return 'por favor ingrese un numero';
				}
				return true;
			}
		}
	];
	const {desc} = await inquirer.prompt(question);
	return desc;
}
const listadoTareasBorrar = async(tareas=[])=>{
const choices = tareas.map((tarea,i) =>{
	const idx = `${i+1}.`.green;
	return{
		value:tarea.id,
		name:`${idx} ${tarea.desc}`,

	}
});
choices.unshift({
	value:'0',
	name:'0.'.green + 'cancelar'
})
const preguntas = [
	{
		type:'list',
		name:'id',
		message:'Borrar',
		choices
	}
]
const {id} = await inquirer.prompt(preguntas);
return id;
}
const confirmar = async (message) =>{
	const question =[
	{
		type: 'confirm',
		name:'ok',
		message
	}	
	] ;
	
	const {ok} = await inquirer.prompt(question);
	return ok;
}

const mostrarListadoChecklist = async(tareas=[])=>{
	const choices = tareas.map((tarea,i) =>{
		const idx = `${i+1}.`.green;
		return{
			value:tarea.id,
			name:`${idx} ${tarea.desc}`,
			checked:(tarea.completadoEn) ? true : false 
		}
	});
	
	const pregunta = [
		{
			type:'checkbox',
			name:'ids',
			message:'seleccione',
			choices
		}
	]
	const {ids} = await inquirer.prompt(pregunta);
	return ids;
	}

module.exports = { inquirerMenu,pausa,leerInput,listadoTareasBorrar,confirmar,mostrarListadoChecklist };
