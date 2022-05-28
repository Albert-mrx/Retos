let notas=[
  {
      curso:'programacion',
      nota:15,
      credito:6
  },
  {
    curso:'geometria',
    nota:18,
    credito:8
  },
  {
      curso:'POO',
      nota:20,
      credito:10
  }
];
//ontener los siguientes atrubutos = nota y credito multiplicados
const notasCredito=notas.map((notaObjeto)=>{return notaObjeto.nota*notaObjeto.credito});
//sumar todas las notas y creditos multiplicados
const sumaNotasCredito=notasCredito.reduce((sum,NuevoValor)=>{
  return sum+NuevoValor;
},0);

//Obtener valor de creditos
const creditos=notas.map(credit=>credit.credito);
//sumar todos los creditos obtenidos
const sumCreditos=creditos.reduce((val1,val2)=>{return val1+val2},0);

let notF=parseInt(sumaNotasCredito/sumCreditos);

function final(promedio){
  if(promedio>=13){
    console.log(`Aprovado con : ${promedio}`);
  }else{
    console.log('No aprovado');
  }
}


console.log(sumaNotasCredito);
console.log(sumCreditos);
final(notF);
