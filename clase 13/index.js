//! Spread Operator ("el desparramador")
// const arr = ['Sofia', 'Gonzalo', 'Juan Carlos', 'Carla'];
// // tira el contenido del arreglo en otro contenedor, en este caso en console.log
// console.log(...arr);
// // Siempre debo tirarlo en otro contenedor, si no da error. Pueden probarlo sacando los corchetes de la linea 6.
// const nuevoArr = [...arr];
// console.log(nuevoArr);

//* Spread de obj
// let persona = {
//   nombre: 'Belen',
//   edad: 27,
// };
// // Tira el contenido del arreglo en otro contenedor, en este caso en console.log
// // Siempre debo tirarlo en otro contenedor, si no da error. Pueden probarlo sacando los corchetes de la linea 16.
// // Si una clave ya existe en el nuevo obj en donde estoy "tirando" otro obj, la clave repetida se sobrescribe
// // (puede probarlo borrando la clave / valor belen linea 11)
// let nuevaPersona = { nombre: 'Gaston', ...persona };
// console.log('Nueva Persona:', nuevaPersona);

//? Rest
// // Operador Rest(basicamente los mismos 3 puntos del spread pero utilizados en una func)
// // Crea de forma automatica un arreglo con todos los datos que se parasaron por parametro
// function test(...params) {
//   console.log(params);
// }
// // estos datos los toma params y los agrega a un arreglo, pueden pasar lo que sea y se agrega al arreglo.
// test(1, 2, 3, 4, { a: 'manzana' });
