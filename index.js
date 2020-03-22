const { CRUD } = require('./helpers');
const db = require('./models');

const params = process.argv;

// Caso en el que solo se envie ningun argumento
if( params.length <= 2){
    process.exit(0);
}


// Se elimina los dos argumentos por defecto
const args = params.slice(2);

// tomamos el commando que se desea realizar create, read, update, delete
const command = args[0].split(":")[0].substring(2); 
// tomamos las entidades que se crearan para una tabla en especifico 
const entity  = args[0].split(":")[1];

switch(command){
    case CRUD.CREATE:
        const data = {};
        // Procedemos a recorrer las distintas instancias que deseamos insertar
        args.slice(1).map((arg) => {
            const tmp = arg.split("="); 
            data[tmp[0].substring(2)] = tmp[1];
        })
        db[entity]
            .create(data)
            .then( () => console.log("data created"))
            .catch(console.log);
        
        console.log(data);
        break;
    
    case CRUD.READ:
        db[entity]
            .findAll()
            .then(console.log)
            .catch(console.log('No se encontro la entidad'))
        console.log('Read!!!');

    default: 
        console.log('Operation not found');
}



