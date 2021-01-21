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