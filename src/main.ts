import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`


/**
 * 
 * En base al listado de estudiantes y una nota de Referencia,
 * crear un reporte con las siguiente informacion:
 * 
 * listado de aproved
 * listado de failed
 * 
 * listado de maleAproved
 * listado de femaleAproved
 * 
 * listado de maleFailed
 * listado de femaleFailed
 * 
 * total de aproved
 * total de maleAproved
 * total de femaleAproved
 * 
 * total de failed
 * total de maleFailed
 * total de femaleFailed
 * 
 * percentAproved
 * percentFailed
 * 
 * // NOTA => El resultado del ejercicio debe quedar como la imagen adjunta
 *  
 */


const constants = {
  MALE: 'male',
  FEMALE: 'female' 
}

type Student = {
  name: string;
  lastName: string;
  gender: string;
  note: number;
}

const noteRef: number = 6;

const students: Student[] = [
  {
    name: 'Gaston',
    lastName: 'Naccarato',
    gender: 'Male',
    note: 7
  },
  {
    name: 'Lujan',
    lastName: 'Naccarato',
    gender: 'Female',
    note: 9.50
  },
  {
    name: 'Elena',
    lastName: 'Ruiz',
    gender: 'Female',
    note: 5
  },
  {
    name: 'Valentina',
    lastName: 'Naccarato',
    gender: 'Female',
    note: 7
  },
  {
    name: 'Juan',
    lastName: 'Scaparro',
    gender: 'Male',
    note: 3.50
  },
  {
    name: 'Lorenzo',
    lastName: 'Scaparro',
    gender: 'Male',
    note: 8
  },
  {
    name: 'Valentino',
    lastName: 'Scaparro',
    gender: 'Male',
    note: 6
  },
  {
    name: 'Mariela',
    lastName: 'Ferreira',
    gender: 'Female',
    note: 4
  },
  {
    name: 'Norberto',
    lastName: 'Ledo',
    gender: 'Male',
    note: 2
  },
  {
    name: 'Alicia',
    lastName: 'Centurion',
    gender: 'Female',
    note: 7
  },
  {
    name: 'Elvis',
    lastName: 'Barrilito',
    gender: 'Male',
    note: 10
  },
  {
    name: 'Bruna',
    lastName: 'Bonita',
    gender: 'Female',
    note: 4
  },
];


const aproved: Student[] = students.filter( (student) => student.note >= noteRef )
const failed: Student[] = students.filter( (item) => item.note < noteRef ) 

const maleAproved: Student[] = aproved.filter( (student) => student.gender.toLowerCase() === constants.MALE )
const femaleAproved: Student[] = aproved.filter( (student) => student.gender.toLowerCase() === constants.FEMALE ) 

const maleFailed: Student[] = failed.filter( (student) => student.gender.toLowerCase() === constants.MALE )
const femaleFailed: Student[] = failed.filter( (student) => student.gender.toLowerCase() === constants.FEMALE )


const totalStudents: number = students.length;
const totalAproved: number = aproved.length;
const totalFailed: number = failed.length;

const totalMaleAproved: number = maleAproved.length;
const totalFemaleAproved: number = femaleAproved.length;

const totalMaleFailed: number = maleFailed.length;
const totalFemaleFailed: number = femaleFailed.length;

const percentAproved: string = `${Math.round(totalAproved * 100 / totalStudents )}%`
const percentFailed: string = `${Math.round(totalFailed * 100 / totalStudents)}%`





const totales = {
  Aprobados: totalAproved,
  Reprobados: totalFailed,
  'Hombres Aprobados': totalMaleAproved,
  'Mujeres Aprobadas': totalFemaleAproved,
  'Hombres Reprobados': totalMaleFailed,
  'Mujeres Reprobadas': totalFemaleFailed,
  'Porcentaje Aprobados': percentAproved,
  'Porcentaje Reprobados': percentFailed
}


console.table(students);


console.groupCollapsed('APROBADOS')

  console.table(aproved);

  console.groupCollapsed('HOMBRES')
    console.table(maleAproved);
  console.groupEnd()

  console.groupCollapsed('MUJERES');
    console.table(femaleAproved);
  console.groupEnd() 

console.groupEnd()



console.groupCollapsed('DESAPROBADOS')

  console.table(failed);

  console.groupCollapsed('HOMBRES'); 
    console.table(maleFailed);
  console.groupEnd();

  console.groupCollapsed('MUJERES');  
    console.table(femaleFailed);
  console.groupEnd();
  
console.groupEnd();


console.groupCollapsed('TOTALES');
   console.table(totales);
console.groupEnd();

