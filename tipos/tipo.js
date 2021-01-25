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
var calculo;
calculo = multiplicar;
console.log(calculo(5, 10));
//objetos e tipos
var usuario = {
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
var funcionario;
funcionario = {
    nomeSupervisores: ['Marcelo', 'Joice', 'Rodrigo'],
    baterPonto: verificaPonto
};
function verificaPonto(hora) {
    var retorno;
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
var funcionario2 = {
    nomeSupervisores: ['Nome 1', 'Nome2'],
    baterPonto2: function (hora) {
        var retorno;
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
var funcionario3 = {
    nomeSupervisores: ['Bia', 'Carlos'],
    baterPonto2: function (hora) {
        var retorno;
        if (hora <= 8) {
            retorno = "Ponto normal";
        }
        else {
            retorno = "Fora do horário";
        }
        return retorno;
    }
};
var funcionario4 = {
    nomeSupervisores: ['Bia', 'Carlos'],
    baterPonto2: function (hora) {
        var retorno;
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
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '8.5';
console.log("Minha nota \u00E9 " + nota);
//checando tipos em RunTime
var valor = 30;
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
var produto = {
    nome: "teste",
    preco: 8,
    validarProduto: function () {
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
var altura = 12;
// altura = null
//uma solução é utilizar o Union types
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: "Marcelo",
    tel1: "123456789",
    tel2: null
};
console.log(contato1);
var podeSernulo = null;
console.log("tipo nulo", typeof podeSernulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map