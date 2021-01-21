"use strict";
/**
 * Atribuição por inferência
 */
//string
var nome = "João";
console.log(nome);
//numer
var idade = 27;
console.log(idade);
//idade = "Ana"
idade = 27.5;
console.log(idade);
//boolean
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
/**
 * Atribuição explícita
 *
 * caso não inicializar, a variável fica dinâmica (any)
 */
var minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
//minhaIdade = 'idade é 27'
//array
var hobbies = ["cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
//hobbies = [100]
//tuplas (array de qtd pré definida de tipos)
var endereco = ["Av Principal", 99, "caixa d'água"];
console.log(endereco);
