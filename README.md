# SQLITE_In_NODEJS

Comandos Iniciales
```
 -npm init -y // inicializando el proyecto
 -npm init sequelize sequelize-cli sqlite3 // 
```
1. Config : Json con los distintos ambientes y configuraciones
2. Models : Interaccion con los modelos y configurarlo con los ambientes, en esta carpeta aparece la tabla que creamos con el segundo comando con nombre contac.js
3. Migrations : Donde se enlistas las migraciones para ejecutar
4. Seeder : Para el llenado de la base de datos

Ejecutables por consola:
```
// Crea 4 directorios "config, migrations, models, seeders"
 node_modules/.bin/sequelize init 
// Creacion de una tabla
 node_modules/.bin/sequelize model:generate --name Contact --attributes firstname,lastname,phone.email
// Migrar a la base de datos
 node_modules/.bin/sequelize db:migrate
// Insertar seeds
 node_modules/.bin/sequelize db:seed:all
 
```
### PASOS 

1. Modificación del Json en config:
```
{
  "development": {
    "dialect" : "sqlite",
    "storage" : "./db.sqlite3"
  },
  "production": {
    "dialect" : "sqlite",
    "storage" : "./db.sqlite3"
  }
}

```
2. Implementación de los seeders
```
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts',
    [
      {
        firstname : 'Franco',
        lastname  : 'Chavez',
        phone     : '946667394',
        email     : 'franco.chp@gmail.com',
        createdAt : new Date().toDateString(),
        updatedAt : new Date().toDateString()
      },
      {
        firstname: 'Pablo',
        lastname : 'Lobon',
        phone    : '945740707',
        email    : 'l.chp@gmail.com',
        createdAt : new Date().toDateString(),
        updatedAt : new Date().toDateString()
      }
    ]

    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

```
3. Creacion del helpers
>Helper->crud.js
```
module.exports = {
    CREATE : 'create',
    READ   : 'read',
    UPDATE : 'update',
    DELETE : 'delete'
}
```
>Helper->index.js
```
module.exports = {
    CRUD: require('./crud')
}
```
>index.js principal
```
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
            .catch(console.log)
        console.log('Read!!!');

    default: 
        console.log('Operation not found');
}

```
> Comando para uso
```
node . --create:contact --firstname=nombre --lastname=apellido --phone=numero --email='correo'
```

