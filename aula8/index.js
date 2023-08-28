/*
Enrico Brasil tem 22 anos, pesa 82kg tem 1.79 de altura e seu imc é de 
*/

const nome = 'Enrico';
const sobrenome = 'Brasil';
const idade = 22;
const peso = 84;
const altura = 1.80;

let imc = peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg tem ${altura} e seu IMC é de ${imc}, seu ano de nascimento é ${anoNascimento}`)
