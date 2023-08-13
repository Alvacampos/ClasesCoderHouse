// ! Ejemplo Coderapp
// const claseJs = [
//   ['gonzalo', 'andres', 'ramiro'],
//   ['oscar', 'santiago', 'maria'],
// ];

// const claseJs2 = [
//   ['otro profe', 'andres', 'ramiro'],
//   ['otro alumno', 'santiago', 'maria'],
// ];

// const coderhouse = {
//   CEO: 'Juan Perez',
//   clase5320: [...claseJs],
//   clase5321: [...claseJs2],
//   clase5322: [...claseJs],
//   clase5323: [...claseJs],
// };

// for (const coder in coderhouse) {
//   if (coder === 'CEO') {
//     let elemento = document.createElement('h1');
//     elemento.textContent = coderhouse[coder];
//     document.body.appendChild(elemento);
//   } else {
//     coderhouse[coder].forEach((element) => {
//       let div = document.createElement('div');
//       let h2 = document.createElement('h2');
//       div.appendChild(h2);
//       h2.textContent = `Comision ${coder}`;
//       element.forEach((e) => {
//         console.log(e);
//         let elemento = document.createElement('h3');
//         elemento.textContent = e;
//         div.appendChild(elemento);
//       });

//       document.body.appendChild(div);
//     });
//   }
// }

// ! Ejemplo SweetAlert
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Registro',
//     input: 'email',
//     confirmButtonColor: 'red',
//   });
// });

// ! Ejemplo Toastify
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   Toastify({
//     text: 'This is a toast',
//     duration: 3000,
//     destination: 'https://github.com/apvarun/toastify-js',
//     newWindow: true,
//     close: true,
//     gravity: 'top', // `top` or `bottom`
//     position: 'left', // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background: 'linear-gradient(to right, #00b09b, #96c93d)',
//     },
//     onClick: function () {}, // Callback after click
//   }).showToast();
// });

// ! Ejemplo Luxo
// // Aqui traigo a luxon y defino una variable DateTime
// let DateTime = luxon.DateTime;

// // Aqui obtengo la fecha actual
// const now = DateTime.now();

// // Aqui hago uso de luxon para obtener la fecha actual (esto cambia con el tiempo)
// console.log(now.c.day + '/' + now.c.month + '/' + now.c.year);
