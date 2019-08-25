const crearOpts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea'
    }
}
const actualizarOpts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: "Descripcion de la tarea"
    },
    completado: {
        alias: 'c',
        default: true,
        desc: "Marca como completado o pendiente la tarea"
    }
}
const borrrarOpts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea'
    }
}
const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', crearOpts)
    .command('actualizar', 'Actualiza una tarea', actualizarOpts)
    .command('borrar', 'Borra una tarea', borrrarOpts)
    .help()
    .argv;

module.exports = {
    argv
}