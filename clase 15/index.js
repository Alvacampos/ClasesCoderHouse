//  * Ejemplo setTimeout
// console.log('Hola soy el primer console.log');
// setTimeout(() => console.log('10 miliseg'), 10);
// setTimeout(() => console.log('0 miliseg'), 0);
// console.log('Hola soy el 3er console.log!');
// console.log('4');
// console.log('5');
// console.log('6');

// ! Ejemplo con evento
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     console.log('Regristro completo');
//   }, 1000);
// });

// ? Call stack //first in last out
// esto se resuelve primero
// First in last out - FILO
// function primera() {
//   return '/primer plato🍛/';
// }

// // esto se resuelve 2do
// function segunda() {
//   return '/segundo plato 🍛/\n' + primera();
// }

// // esto se resuelve 3ro
// function tercera() {
//   console.log('/tercero plato🍛/\n' + segunda());
//   console.log('123');
// }

// tercera();

// function asd() {
//   console.log('hola');
// }

// asd();

// * Event loop
// //Primer plato
// console.log('Hola');
// // Pasa al event loop (pasa a otra etapa), una vez que el callstack esta vacio el motor de js le preguntar al event loop si tiene algo terminado,
// // si! la func setTimeout ya termino por lo tanto se la devuelve al callstack y la ejecuta o sea muestra el console.log
// setTimeout(() => console.log('mundo'), 0);
// // 2do plato
// console.log('!');

// ! setInterval
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   console.log('voy a contar 10 seg');
//   let count = 0;
//   const interval = setInterval(() => {
//     count++;
//     console.log(count);

//     if (count === 10) {
//       clearInterval(interval);
//       console.log('fin!');
//     }
//   }, 1000);
//   console.log('Tecnicamente deberia ir al ultimo');
// });

// console.log('Inicio');

// const fin = setTimeout(() => {
//   console.log('fin');
// }, 2000);

// clearTimeout(fin);

// * Promesas
// const helloPromise = () => {
//   return new Promise((resolve, reject) => {
//     false
//       ? resolve('hello')
//       : reject('esto es un msj de error, puede ser lo que sea');
//   });
// };
// console.log(helloPromise());

// ! Then
// new Promise((resolve, reject) => {
//   true ? resolve('hello') : reject('error');
// }).then(() => console.log('hago algo despues de que la promesa se cumple'));

// ? Catch
// new Promise((resolve, reject) => {
//   false
//     ? resolve('hello')
//     : reject(
//         'esto es un error grave de la base de datos, tu tarjeta quedo en 0'
//       );
// })
//   .then((resolve) =>
//     console.log('hago algo despues de que la promesa se cumple', resolve)
//   )
//   .catch((error) => console.log(error));

// * Finally
// new Promise((resolve, reject) => {
//   false ? resolve('hello') : reject('error');
// })
//   .then((resolve) =>
//     console.log('hago algo despues de que la promesa se cumple', resolve)
//   )
//   .catch((e) => console.log(e))
//   .finally(() => {
//     console.log('Fin del proceso');
//   });
