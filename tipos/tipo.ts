/**
 * Atribuição por inferência
 */

//string
let nome: string= "João";
console.log(nome)

//numer
let idade: number = 27;
console.log(idade)
//idade = "Ana"
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false;
//possuiHobbies = 1
console.log(possuiHobbies)

/**
 * Atribuição explícita
 * 
 * caso não inicializar, a variável fica dinâmica (any)
 */

 let minhaIdade:number;
 minhaIdade =  27;
 console.log(minhaIdade)
 //minhaIdade = 'idade é 27'

 //array
 let hobbies: string[] = ["cozinhar", "Praticar esportes"]
 console.log(hobbies[0])
 console.log(typeof hobbies)

 //hobbies = [100]

//tuplas (array de qtd pré definida de tipos)

let endereco:[string, number, string]= ["Av Principal", 99, "caixa d'água"]
console.log(endereco)

//enum
enum  Cor {
    Cinza, //0
    Verde = 100, //sobreescrevendo valor padrão do enum
    Azul // se o Enum for definido com valor fora do padrão, os demais valores a baixo do valor sobreescrito, será subsequente à ele ou seja, Azul será 101
}

let minhaCor = Cor.Cinza;
console.log(minhaCor)
console.log(Cor.Azul)

//Tipo any - Tipo flexível, igual o java script
let carro: any = "BMW"
console.log(carro)
carro = {marce:"BMW", ano:2018}
console.log(carro)

//tipo sem funções;
function retornaMeuNome(): string {
    return nome;
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log("oi")
}

digaOi();

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

console.log(multiplicar(2.25,2))

//tipo função
let calculo: (numeroA:number, numeroB: number) => number

calculo = multiplicar;

console.log(calculo(5,10))

//objetos e tipos
let usuario: {nome:string, idade:number} = {
    nome:'João',
    idade:27
}
console.log(typeof usuario)
console.log(usuario)
// usuario = {}
// usuario = {
//     name:'Maria',
//     age:31
// }
usuario = {
    nome:'Maria',
    idade:31
}
console.log(usuario)


//desafio tipos objeto
/**
 * criar u, objeto com:
 *  - Array de strings com nomes dos supervisores
 *  - funcao de bater ponto que recebe a hora (numero) e retorna uma string
 *     -> Ponto normal ( <=8 ) 
 *     -> Fora do horário (> 8)
 */

let funcionario :{
    nomeSupervisores:string[],
    baterPonto : (hora:number) => string
}


funcionario = {
    nomeSupervisores:['Marcelo', 'Joice','Rodrigo'],
    baterPonto : verificaPonto
}


function verificaPonto(hora:number):string{
    let retorno:string;

    if(hora <= 8){
        retorno = "Ponto normal";
    }else{
        retorno = "Fora do horário"
    }
    return retorno;
}

console.log(funcionario)
console.log(funcionario.baterPonto(8.5))

/////// OOOOU PODE SER ASSIM

let funcionario2 :{
    nomeSupervisores:string[],
    baterPonto2 : (hora:number) => string
} = {
    nomeSupervisores:['Nome 1', 'Nome2'],
    baterPonto2:(hora:number):string{
        let retorno:string;
        if(hora <= 8){
            retorno = "Ponto normal";
        }else{
            retorno = "Fora do horário"
        }
        return retorno;
    }
}

console.log(funcionario2.nomeSupervisores)
console.log(funcionario2.baterPonto2(8))
console.log(funcionario2.baterPonto2(9.5))

//alias
type Funcionario = {
    nomeSupervisores:string[],
    baterPonto2 : (hora:number) => string
}

let funcionario3 :Funcionario = {
    nomeSupervisores:['Bia', 'Carlos'],
    baterPonto2:(hora:number):string{
        let retorno:string;
        if(hora <= 8){
            retorno = "Ponto normal";
        }else{
            retorno = "Fora do horário"
        }
        return retorno;
    }
}

let funcionario4 : Funcionario = {
    nomeSupervisores:['Bia', 'Carlos'],
    baterPonto2:(hora:number):string{
        let retorno:string;
        if(hora <= 8){
            retorno = "Ponto normal";
        }else{
            retorno = "Fora do horário"
        }
        return retorno;
    }
}

console.log(funcionario3, funcionario4)