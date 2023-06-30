function somar (a, b){
    return a + b
}
let resultado = somar(40, 20);
console.log(resultado);

let saudacoes = function(nome){
    console.log("Olá " + nome + "!");
}
saudacoes ("João")

function exibirMensagem (mensagem){
    console.log(mensagem);
}
exibirMensagem("Olá Mundo");

function digaMeuNumero (comeco, fim) {
    for(let i = comeco; i <= fim; i++){
        console.log(i);
    }
}

digaMeuNumero(1, 10);

function pegarComandas(){
    console.log("Olá, boa noite");
    console.log("Pegue aqui a sua comanda.");
    console.log("Até a proxima.");
}

pegarComandas();

function executarOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
  }
  
  function soma(a, b) {
    return a + b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  console.log(executarOperacao(5, 3, soma)); // Output: 8
  console.log(executarOperacao(5, 3, multiplicacao)); // Output: 15

  

function mostrarNome(nomeDaPessoa){
    console.log(nomeDaPessoa);
}

mostrarNome("Rodolfo");
mostrarNome("Já deu o like no video")

 function soma (numero1, numero2){
    const somaDosNumeros = numero1 + numero2;
    return somaDosNumeros
 }

const meusNumeros = soma(4,6)
console.log(meusNumeros);


function sum (a, b) {
    return a + b
}
const result = sum (3, 4);
console.log(result);























