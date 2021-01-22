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
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // se o Enum for definido com valor fora do padrão, os demais valores a baixo do valor sobreescrito, será subsequente à ele ou seja, Azul será 101
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Azul);
//Tipo any - Tipo flexível, igual o java script
var carro = "BMW";
console.log(carro);
carro = { marce: "BMW", ano: 2018 };
console.log(carro);
