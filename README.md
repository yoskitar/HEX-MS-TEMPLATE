# You are using DDD-HEX-TEMPLATE
Plantilla realizada siguiendo la metodología Domain Driven Design. Se da por defecto el uso de varios protocolos de comunicación vía APIRest con HTTP, y Broker de mensajes mediante MQTT Y WebSockets. En caso de no tener que emplearse, tan solo será necesario eliminar la carpeta apropiada de la estructura del directorio.

Se ha presupuesto el uso del lenguaje Typescript para el desarrollo del microservicio en cuestión. En caso de emplear otro lenguaje, dirijirse a plantilla concreta, o adaptar esta para ello según sea necesario.

# IMPORTANTE!
Será necesario inicializar el proyecto con el package.json correspondiente, además de tener las herramientas y dependencias necesarias correctamente configuradas para el uso de typescript.

Para iniciar el proyecto, ejecutar la orden `npm init` en la ruta principal del repositorio de la siguientes forma, y con los siguientes argumentos:
```
$ npm init
```
```
Input:
{
  "name": "<nombre del microservicio>",
  "version": "1.0.0",
  "description": "<Breve descripción de no más de 2 líneas>",
  "main": "src/server.js",
  "scripts": {
    "test": "npx nyc --reporter=lcov nyc --reporter=lcov mocha src/test/ --exit"
  },
  "author": "smartfenix",
  "license": "ISC"
}
```