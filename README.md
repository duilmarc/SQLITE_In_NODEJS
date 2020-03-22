# SQLITE_In_NODEJS

Comandos Iniciales
```
 -npm init -y // inicializando el proyecto
 -npm init sequelize sequelize-cli sqlite3 // 
```

Ejecutables por consola:
```
 - node_modules/.bin/sequelize init // Crea 3 directorios "config, migrations, models, seeders"
```

1. Config : Json con los distintos ambientes y configuraciones
2. Models : Interaccion con los modelos y configurarlo con los ambientes

Modificación del Json en config:
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

Generacion del 1 modelo: 


Instalacion de los modulos de nodejs:

    *sequelize
    *sqlite3

## Creacion del helpers

Creacion de CRUD (create,read,update,delete) exporta al index.js de helpers
## Creacion de carpeta models

##Creacion de carpeta migrations

