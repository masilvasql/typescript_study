"use strict";
/**
 * @since 26/01/2021
 */
//let & const
let seraQuePode = '?'; //hoisting
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco";
    console.log(acao);
}
/**
 * Var só tem 2 escopos, GLOBAL
 * ou LOCAL se estiver dentro de uma FUNÇÃO
 */
const cpf = "123.456.000-99";
//   cpf = "1223"
console.log(cpf);
/**
 * const GLOBAL, DENTRO DE FUNÇÃO OU DENTRO DE BLOCO
 */
var segredo = "externo";
function revelar() {
    var segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
//    {
//        const def = 'def'
//    }
//    console.log(def)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
/**
 * arrow function
 * sintaxe reduzida e o this
 */
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('João');
//this
function normalComThis() {
    //  console.log(this)
}
const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();
// this ?
console.log(this);
const arrowComThis = () => console.log();
arrowComThis();
/**
 * @since 27/01/2020
 */
//parâmetro padrão
function contagemRegressiva(inicio = 10, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("FIM");
}
contagemRegressiva();
//Operador Spred & Rest
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ["joão", "Maria", "Fernanda"];
const turmaB = ["Fernando", "Miguel", "Lorena", ...turmaA];
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
//rest & spred (tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b}, ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params}`);
}
tuplaParam2(1, 'Opa', true);
//destructuring
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];
const [motor, ano] = caracteristicas;
console.log(motor, ano);
//destructuring objeto
const item = {
    nome: 'ssd 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n, p);
console.log(nomeItem, precoItem);
console.log(w);
//template string 
const usuarioID = "Suporte teste";
const notificacoes = '10';
const boasVindas = 'Boas vindas ' + usuarioID + ' Notificações ' + notificacoes;
const boasVindas2 = `Boas vindas ${usuarioID} Notificações ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;
console.log(boasVindas);
console.log(boasVindas2);
//exercícios
//1)
var dobro = function (valor = 5) {
    return valor * 2;
};
console.log(dobro(10));
//2)
var dizerOla = function (nome) {
    if (nome === undefined) {
        nome = "Pessoa";
    }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
//3)
var nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
//4)
var nums = [-3, 33, 38, 5];
var array = [55, 20, ...nums];
console.log(array);
//5)
var notas = [8.5, 6.3, 9.4];
var notas1 = notas[0];
var notas2 = notas[1];
var notas3 = notas[2];
var ex5_1 = [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);
console.log(...ex5_1);
var cientista = { primeiroNome: "Will", experiencia: 12 };
var primeiroNome = cientista.primeiroNome;
var experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
var { primeiroNome: pn, experiencia: exp } = cientista;
console.log(pn, exp);
//# sourceMappingURL=ecmascript.js.map