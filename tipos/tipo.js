"use strict";
/**
 * Atribuição por inferência
 */
//string
let nome = "João";
console.log(nome);
//numer
let idade = 27;
console.log(idade);
//idade = "Ana"
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
/**
 * Atribuição explícita
 *
 * caso não inicializar, a variável fica dinâmica (any)
 */
let minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
//minhaIdade = 'idade é 27'
//array
let hobbies = ["cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
//hobbies = [100]
//tuplas (array de qtd pré definida de tipos)
let endereco = ["Av Principal", 99, "caixa d'água"];
console.log(endereco);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // se o Enum for definido com valor fora do padrão, os demais valores a baixo do valor sobreescrito, será subsequente à ele ou seja, Azul será 101
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Azul);
//Tipo any - Tipo flexível, igual o java script
let carro = "BMW";
console.log(carro);
carro = { marce: "BMW", ano: 2018 };
console.log(carro);
//tipo sem funções;
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.25, 2));
//tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 10));
//objetos e tipos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(typeof usuario);
console.log(usuario);
// usuario = {}
// usuario = {
//     name:'Maria',
//     age:31
// }
usuario = {
    nome: 'Maria',
    idade: 31
};
console.log(usuario);
//desafio tipos objeto
/**
 * criar u, objeto com:
 *  - Array de strings com nomes dos supervisores
 *  - funcao de bater ponto que recebe a hora (numero) e retorna uma string
 *     -> Ponto normal ( <=8 )
 *     -> Fora do horário (> 8)
 */
let funcionario;
funcionario = {
    nomeSupervisores: ['Marcelo', 'Joice', 'Rodrigo'],
    baterPonto: verificaPonto
};
function verificaPonto(hora) {
    let retorno;
    if (hora <= 8) {
        retorno = "Ponto normal";
    }
    else {
        retorno = "Fora do horário";
    }
    return retorno;
}
console.log(funcionario);
console.log(funcionario.baterPonto(8.5));
/////// OOOOU PODE SER ASSIM
let funcionario2 = {
    nomeSupervisores: ['Nome 1', 'Nome2'],
    baterPonto2: (hora) => {
        let retorno;
        if (hora <= 8) {
            retorno = "Ponto normal";
        }
        else {
            retorno = "Fora do horário";
        }
        return retorno;
    }
};
console.log(funcionario2.nomeSupervisores);
console.log(funcionario2.baterPonto2(8));
console.log(funcionario2.baterPonto2(9.5));
let funcionario3 = {
    nomeSupervisores: ['Bia', 'Carlos'],
    baterPonto2: (hora) => {
        let retorno;
        if (hora <= 8) {
            retorno = "Ponto normal";
        }
        else {
            retorno = "Fora do horário";
        }
        return retorno;
    }
};
let funcionario4 = {
    nomeSupervisores: ['Bia', 'Carlos'],
    baterPonto2: (hora) => {
        let retorno;
        if (hora <= 8) {
            retorno = "Ponto normal";
        }
        else {
            retorno = "Fora do horário";
        }
        return retorno;
    }
};
console.log(funcionario3, funcionario4);
//union types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '8.5';
console.log(`Minha nota é ${nota}`);
//checando tipos em RunTime
let valor = 30;
if (typeof valor === "number") {
    console.log(" é Number");
}
else {
    console.log(typeof valor);
}
//Tipo Never (Função que não possui um fim)
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "teste",
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa Ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço não pode ser menor ou igual a 0");
        }
    }
};
produto.validarProduto();
//valores opcionais com tipo "null"
let altura = 12;
// altura = null
//uma solução é utilizar o Union types
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Marcelo",
    tel1: "123456789",
    tel2: null
};
console.log(contato1);
let podeSernulo = null;
console.log("tipo nulo", typeof podeSernulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map