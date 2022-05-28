/*
escribimos una funcion de tipo map para que puedea traer elemento salario de los 
objetos alojados en un array
*/
const SalariosPE=Peru.map((persona)=>{
    return persona.salario;
});

//ordenamos para hallar su medina ,media y moda

const SalPEorden=SalariosPE.sort((salarioA,salarioB)=>{
    return salarioA-salarioB;
});
//una funcion para analizar si es par
function espar(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
//funcion que calcula la media aritmetica
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado,nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      },0);

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  //mediana de Salarios
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
//creamos una funcion para que nos halle la mediana de la lista

function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);
    if(espar(lista.length)){
        const personaMitad1lista=lista[mitad-1];
        const personaMitad2=lista[mitad];
    }else{
        const personaMitad=lista[mitad];
        return personaMitad;
    }
}
