const cars = ["Volvo", "Chevrolet", "Fiat"];
let x = cars[1];
console.log(x);

var frutas = ['Maçã', 'Banana'];
console.log(frutas.length);

var primeiro = frutas[0];
// Maçã
console.log(primeiro);
var ultimo = frutas[frutas.length - 1];
// Banana
console.log(ultimo);

var adicionar = frutas.push('Laranja');
console.log(adicionar);

let frutas = ["Laranja", "Maça", "Morango"];

var ultimo = frutas.pop(); // remove Laranja (do final)
var primeiro = frutas.shift(); // remove Maçã do início
var adicionar = frutas.unshift('Morango') // adiciona ao início

console.log(ultimo);
console.log(primeiro);
console.log(adicionar);

var arr = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]);              // exibe 'este é o primeiro elemento'
console.log(arr[1]);              // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este é o segundo elemento'

let numeros = [1,2,3,4,5];
let nomes = ["Isaac", "Maciel", "Bessa"]
let boo = [true, false, true, false]
let misto = [1, true, "dois", [4,5,6]];
let vazio = [];
let obj = [
    {nome: "Isaac", idade : 20},
    {nome: "Maciel", idade : 20},
    {nome: "Bessa", idade: 20}
];

console.log(numeros);
console.log(nomes);
console.log(boo);
console.log(misto);
console.log(vazio);
console.log(obj);