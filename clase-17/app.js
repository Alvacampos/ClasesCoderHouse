//? Caracteristicas que tendra mi server (protocolo, url, puerto).
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//? Crear un servidor con el protocolo HTTP y la funcion callback de request y response.
const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Soy un servidor creado con NodeJs!');
});

//? El servidor escucha request con la configuracion otorgada.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//? NodeJs es un runtime environment, es un ambiente donde es posible correr JS fuera del navegador.
//? Esto nos permite poder trabajar en el backend.
//! Para encender el servidor, va a la consola, se paran en la carpeta clase-17 y corren el siguiente codigo.
//* node app.js
//! en la consola deberian ver el siguiente mensaje Server running at http://127.0.0.1:3000/.
//! En su navegador pueden ir a la dir http://127.0.0.1:3000/ y ver la respuesta.
//! Para apagar el servidor pueden cerrar la consola o teclear ctrl + c.
