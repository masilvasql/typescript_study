/**
 * @since 26/01/2021
 */

 //let & const

 let seraQuePode= '?' //hoisting
 console.log(seraQuePode)

 let estaFrio = true;

 if(estaFrio) {
     let acao = "Colocar o casaco"
     console.log(acao)
 }


 /**
  * Var só tem 2 escopos, GLOBAL 
  * ou LOCAL se estiver dentro de uma FUNÇÃO
  */

  const cpf:string = "123.456.000-99";

//   cpf = "1223"

  console.log(cpf)

  /**
   * const GLOBAL, DENTRO DE FUNÇÃO OU DENTRO DE BLOCO
   */
  var segredo = "externo"
   function revelar(){
       var segredo = "interno"
       console.log(segredo)
   }
   revelar()
   console.log(segredo)

   {
       const def = 'def'
   }

//    console.log(def)

for(let i = 0; i < 10 ; i ++){
    console.log(i)
}

// console.log(i)

/**
 * arrow function
 * sintaxe reduzida e o this
 */

 const somar = function(n1: number, n2:number): number{
     return n1 + n2
 }

 console.log(somar(2,2))

 const subtrair = (n1:number, n2:number):number => n1 - n2

 console.log(subtrair(2,3))

 const saudacao =()=> console.log('Olá')

 saudacao()

 const falarCom = (pessoa:string) => console.log('Olá ' + pessoa)

 falarCom('João')

 //this

 function normalComThis(){
     console.log(this)
 }

 const normalComThisEspecial = normalComThis.bind({nome:'Ana'})

 normalComThisEspecial()

 // this ?
 console.log(this)
 const arrowComThis = ()=> console.log(this)

 arrowComThis()