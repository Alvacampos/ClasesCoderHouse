//! ++
// // Hay diferentes formas de suma 1 a un numero
// let num = 1;

// // Suma uno pero despues de ser leido
// console.log(num++);

// // Suma uno antes de leerlo
// console.log(++num);

// //Suma 1 y lo guarda en num
// console.log((num += 1));

//? Ternario (if resumido)
// // condicion ?
// // else :
// // No abusar con el ternario!
// const x = true ? 'si es verdadero retorna esto' : 'si es falso retorna esto';
// console.log(x);

//* Operador AND
// // Si la primera parte es verdadero retorna la 2da
// console.log(true && 'retorno');
// console.log(false && 'no retorna');

//! Operador OR
// // Si la primera parte es true retorna eso
// console.log(true || 'no retorna');
// console.log(false || 'retorna');
// console.log(1 || 'test');

//* Nullish Coalescing Operator
// // Este operador ?? permite deperminar si un valor es nulo o no, parecido al && y || pero solo para nulos
// // Si el primer valor es nulo devuelve el 2do.
// const foo = null ?? 'otro valor';
// console.log(foo);

//? Optional Chaining
// // usando ? despues de el . cuando se accede a la clave de un obj nos permite pregunta primero si el obj existe
// // de ser asi accede al valor, esto evita errores por tratar de acceder a un valor de algo que puede no ser un obj.
// const obj = undefined;
// // Comentar la linea 43 para que la 44 ande.
// console.log(obj.clave);
// console.log(obj?.clave);

//! Desestructuracion
// // Obtengo los datos del obj sin tener que usar el .
// const obj = {
//   nombre: 'Juan',
//   direccion: {
//     calle: 'santa fe',
//     piso: 4,
//   },
// };
// // Aqui obtengo/creo una variable nombre con el dato Juan, y una variable calle con el dato santa fe
// const {
//   nombre,
//   direccion: { calle },
// } = obj;
// console.log(nombre);
// console.log(calle);

//* Alias
// const obj = {
//   nombre: 'Juan',
//   direccion: {
//     calle: 'santa fe',
//     piso: 4,
//   },
// };
// // Accedo como en el ejemplo anterior pero al agregar : puedo darle un alias, otro nombre a la variable
// // se usa para evitar tener nombres repetidos o para ser mas claro.
// const { nombre: nuevoNombre } = obj;
// console.log(nuevoNombre);

//? Desestructuracion en parametros
// // al usar {} en el argumento de la func, podemos sacar la clave/valor que necesitas y utilizarla
// // sin tener que estar usando el . para entrar en cada valor del obj.
// function Hi({ nombre, edad }) {
//   console.log(`Hola ${nombre}, feliz cumple numero ${edad}!`);
// }
// // Es lo mismo que hacer esto, pero con menos codigo, descomentar y comentar la otra funcion para correrlo
// // function Hi(obj) {
// //   console.log(`Hola ${obj.nombre}, feliz cumple numero ${obj.edad}!`);
// // }
// const obj = {
//   nombre: 'Victoria',
//   edad: 75,
// };

// Hi(obj);

//! Desestructuracion de arrays
// // lo mismo que obj
// const arr = [1, 2, 3];
// const [a, b] = arr;
// console.log('1er elemento:', a);
// console.log('2do elemento:', b);

// // si solo necesito el 3
// const [, , c] = arr;
// console.log('3er elemento:', c);
