//ARRAY

const alunos = [5,2,6,1]

console.log();

/*COMANDOS BASICOS PARA O ARRAY
   nomedoArray.push() = ADICIONA UM NOVO VALOR NO FINAL DO ARRAY 
   nomedoArray.pop() = exclui o ultimo valor do fim do array
   nomedoArray.unshift() = coloca um novo valor no indice [0] do array*/

   //METODOS DE ARRAYS

   const nomes = [
      {nome: "enrico", idade: 22},
      {nome: "fabio", idade: 32},
      {nome: "phaedra", idade: 43},
   ]

   const adicionar = nomes.push({
      nome:"everson", idade:11
   })



   console.log(nomes)
   console.log(nomes.random())