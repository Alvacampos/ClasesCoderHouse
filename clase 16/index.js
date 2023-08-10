// ! Ejemplo fetch SIN MENEJO DE PROMESA
// const data = fetch('https://pokeapi.co/api/v2/pokemon/1');
// console.log(data);

// * Ejemplo fetch sin parseo
// fetch('https://pokeapi.co/api/v2/pokemon/1').then((data) => console.log(data));

// ? Fetch parseado
// fetch('https://pokeapi.co/api/v2/pokemon/1').then((res) =>
//   res.json().then((parsedData) => console.log(parsedData))
// );

// ! Ejemplo completo
// Llamada asyncronica
// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then((data) =>
//     data
//       .json() // Metodo asincronico para transformar json a obj
//       .then((parsedData) => console.log(parsedData)) // Debo manejar la promesa generada por json()
//       .catch((e) => console.log('Hubo un error en el parseo', e)) // Atrapa cualquier posible error del .then() de la linea 20
//   )
//   .catch((e) => console.log('Hubo un error', e)); // Atrapa cualquier posible error del .then() de la linea 17

// ? Envio de info con POST
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'DELETE',
//   body: JSON.stringify({
//     title: 'Coderhouse',
//     body: 'Post de prueba',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// * Aplicado al DOM
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(
//       (data) =>
//         data
//           .json() // Metodo asincronico para transformar json a obj
//           .then((parsedData) => {
//             // la respuesta del fetch es guardada en una variable (por lo gral se usan palabras como res, response, etc)
//             let res = parsedData;
//             console.log(res);
//             const div = document.createElement('div');
//             div.className = 'card';
//             const img = document.createElement('img');
//             img.src = res.sprites.front_default;

//             const innerDiv = document.createElement('div');
//             innerDiv.className = 'card-body';
//             // Aqui hago una logica para mostrar algunos datos del pokemon //!(esto se puede hacer de muchas formas)
//             innerDiv.innerHTML = `<h3>${res.name}</h3>
//             <p>Types: ${res.types.reduce(
//               (acc, current) => acc + `<span>${current.type.name}</span>`,
//               ''
//             )} </p>`;
//             div.appendChild(img);
//             div.appendChild(innerDiv);
//             document.body.appendChild(div);
//           }) // Debo manejar la promesa generada por json()
//           .catch((e) => console.log('Hubo un error en el parseo', e)) // Atrapa cualquier posible error del .then() de la linea 31
//     )
//     .catch((e) => console.log('Hubo un error', e)); // Atrapa cualquier posible error del .then() de la linea 28
// });

// ? Maestro pokemon!
// document.getElementById('btn').remove(); // Ya que no necesito el boton lo elimino //! Solo en este ejemplo
// // * Realizo un bucle para pedir todos los pokemones, mucho cuidado a la hora de usar bucles con pedidos al BE.
// for (let i = 1; i < 151; i++) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     .then(
//       (data) =>
//         data
//           .json() // Metodo asincronico para transformar json a obj
//           .then((parsedData) => {
//             // la respuesta del fetch es guardada en una variable (por lo gral se usan palabras como res, response, etc)
//             let res = parsedData;
//             // Genero la carta
//             const div = document.createElement('div');
//             div.className = 'card';
//             // Imagen
//             const img = document.createElement('img');
//             img.src = res.sprites.front_default;
//             // Contenido de la carta
//             const innerDiv = document.createElement('div');
//             innerDiv.className = 'card-body';
//             // Aqui hago una logica para mostrar algunos datos del pokemon //!(esto se puede hacer de muchas formas)
//             innerDiv.innerHTML = `<h3>${res.name}</h3>
//             <p>Types: ${res.types.reduce(
//               (acc, current) => acc + `<span>${current.type.name}</span>`,
//               ''
//             )} </p>`;

//             // Agrego todo lo creado al DOM
//             div.appendChild(img);
//             div.appendChild(innerDiv);
//             document.body.appendChild(div);
//           }) // Debo manejar la promesa generada por json()
//           .catch((e) => console.log('Hubo un error en el parseo', e)) // Atrapa cualquier posible error del .then() de la linea 67
//     )
//     .catch((e) => console.log('Hubo un error', e)); // Atrapa cualquier posible error del .then() de la linea 63
// }

// * Obetener data local con fetch
// Mismo concepto que pedir data al BE solo que aqui ponemos la dir donde se encuentra el archivo
// fetch('./data.json')
//   .then((res) =>
//     res
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((e) => console.log(e))
//   )
//   .catch((e) => console.log(e));

// ! Async / Await ECMAScript 2017
// Llamada asyncronica declaro async antes, de esa forma JS sabe que la funcion es asincronica
// (async function () {
//   //* Nuevo try catch, mas bonito, se repite menos y se lee mas facil
//   try {
//     //! agrego await para informar que la variable debe esperar una respuesta, una vez que la tiene continua con su trabajo
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon/1');
//     console.log(data);
//     //! aqui lo mismo, como ya sabemos json() es un proceso async asi que el await le informa a parsedData que espere hasta que termine.
//     const parsedData = await data.json();
//     console.log('Data: ', parsedData);
//   } catch (e) {
//     //! Aqui atrapamos cualquier error de los await, 1 solo catch para todos. Seguimos usando e o error para el msj de error
//     console.log('No eres un maestro pokemon!', e);
//   }
//   //? Aqui van a ver algo raro, la func parece estar envuelta en () y despues tiene otro (), esto es una IIFE
//   //? Immediately Invoked Function Expression, con esto puedo crear una func anonima que a su vez se dispara de inmediato
//   //? no hay necesidad que piense en una variable donde guardarla ni nada, se ejecuta una sola vez.
// })();

// ? Maestro pokemon con async await
// document.getElementById('btn').remove(); // Ya que no necesito el boton lo elimino //! Solo en este ejemplo
// (async function () {
//   //* Nuevo try catch, mas bonito, se repite menos y se lee mas facil
//   try {
//     // * Realizo un bucle para pedir todos los pokemones, mucho cuidado a la hora de usar bucles con pedidos al BE.
//     for (let i = 1; i < 152; i++) {
//       //! agrego await para informar que la variable debe esperar una respuesta, una vez que la tiene continua con su trabajo
//       const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//       //! aqui lo mismo, como ya sabemos json() es un proceso async asi que el await le informa a parsedData que espere hasta que termine.
//       const parsedData = await data.json();
//       // Genero la carta
//       const div = document.createElement('div');
//       div.className = 'card';
//       // Imagen
//       const img = document.createElement('img');
//       img.src = parsedData.sprites.front_default;
//       // Contenido de la carta
//       const innerDiv = document.createElement('div');
//       innerDiv.className = 'card-body';
//       // Aqui hago una logica para mostrar algunos datos del pokemon //!(esto se puede hacer de muchas formas)
//       innerDiv.innerHTML = `<h3>${parsedData.name}</h3>
//       <p>Types: ${parsedData.types.reduce(
//         (acc, current) => acc + `<span>${current.type.name}</span>`,
//         ''
//       )} </p>`;

//       // Agrego todo lo creado al DOM
//       div.appendChild(img);
//       div.appendChild(innerDiv);
//       document.body.appendChild(div);
//     }
//   } catch (e) {
//     //! Aqui atrapamos cualquier error de los await, 1 solo catch para todos. Seguimos usando e o error para el msj de error
//     console.log('No eres un maestro pokemon!', e);
//   }
//   //? Aqui van a ver algo raro, la func parece estar envuelta en () y despues tiene otro (), esto es una IIFE
//   //? Immediately Invoked Function Expression, con esto puedo crear una func anonima que a su vez se dispara de inmediato
//   //? no hay necesidad que piense en una variable donde guardarla ni nada, se ejecuta una sola vez.
// })();

//! Es posible que mientras practican vean un mensaje que dice CORS(Cross-origin resource sharing),
//! cors es un protocolo de seguridad que no permite pedir cosas entre dominios (seguridad).
//! La realidad es que CORS puede ser ocacionado por diversas cosas y es dificil difinir una causa.
//! Un culpable probable es no usar el live-server de vscode, si ustedes solo abren el archivo HTML desde la carpeta
//! les puede generar este problema. tiene que abrir el proyecto usando el live-server.
