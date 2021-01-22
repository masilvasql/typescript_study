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