// * BARRA DE NAVEGACION
const navBar = [
  {
    label: 'Inicio',
    src: './assets/home.svg',
  },
  {
    label: 'Postulate a cursos',
    src: './assets/bubble.svg',
  },
  {
    label: 'Soporte',
    src: './assets/question.svg',
  },
];

const nav = document.getElementById('navbar');

navBar.forEach((element) => {
  const btn = document.createElement('button');
  btn.textContent = element.label;
  btn.className = 'btn';
  const img = document.createElement('img');
  img.className = 'btn-icon';
  img.src = element.src;
  btn.appendChild(img);
  nav.appendChild(btn);
});
// *

// ! Cursos
var DateTime = luxon.DateTime;

const thead = {
  comision: 'Comisión',
  curso: 'Curso',
  inicia: 'Inicia',
  termina: 'Termina',
  dias: 'Días',
  horario: 'Horario',
};

const curso1 = {
  comision: 1,
  curso: 'HTML',
  inicia: '01/02/24',
  termina: '01/03/24',
  dias: 'Lunes y Miércoles',
  horario: '20:30 a 22:30hs',
  boton: {
    tipo: 'button',
    label: 'ver mas',
  },
};

const curso2 = {
  comision: 2,
  curso: 'JS',
  inicia: '01/02/24',
  termina: '01/03/24',
  dias: 'Lunes y Miércoles',
  horario: '20:30 a 22:30hs',
  boton: {
    tipo: 'button',
    label: 'ver mas',
  },
};

const curso3 = {
  comision: 3,
  curso: 'REACT',
  inicia: '01/02/24',
  termina: '01/03/24',
  dias: 'Lunes y Miércoles',
  horario: '20:30 a 22:30hs',
  boton: {
    tipo: 'button',
    label: 'ver mas',
  },
};

const cursos = [curso1, curso2, curso3];

// ! Genera cada celda de la tabla
function generadorTd(element, type, id = undefined) {
  const td = document.createElement(type);
  if (element.tipo === 'button') {
    const btn = document.createElement(element.tipo);
    btn.textContent = element.label;
    btn.id = id;
    td.appendChild(btn);
  } else {
    const span = document.createElement('span');
    span.textContent = element;
    td.appendChild(span);
  }

  return td;
}

// ! Genera fila de la tabla
function generadorDeFilas(
  { comision, curso, inicia, termina, dias, horario, boton = undefined },
  type
) {
  const row = document.createElement('tr');
  row.className = 'fila';
  const td1 = generadorTd(comision, type);
  const td2 = generadorTd(curso, type);
  const td3 = generadorTd(inicia, type);
  const td4 = generadorTd(termina, type);
  const td5 = generadorTd(dias, type);
  const td6 = generadorTd(horario, type);
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);
  if (boton) {
    const td7 = generadorTd(boton, type, comision);
    row.appendChild(td7);
  }
  return row;
}

// * Genero el head de la tabla
const tableHead = document.getElementById('thead');
const row = generadorDeFilas(thead, 'th');
tableHead.appendChild(row);

// * Genero el contenido
const divCursos = document.getElementById('cursos');
cursos.forEach((curso) => {
  const row = generadorDeFilas(curso, 'td');
  const tbody = document.getElementById('tbody');
  tbody.appendChild(row);
  divCursos.appendChild(tbody);
});
// !

// ! Escucho el primer boton
const btn1 = document.getElementById('1');
console.log(btn1);
btn1.addEventListener('click', (e) => {
  console.log(
    cursos.find((curso) => {
      return curso.comision === Number(btn1.id);
    })
  );
});
