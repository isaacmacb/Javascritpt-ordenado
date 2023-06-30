/*const pessoa = {
    nome: 'vitor',
    idade: 25,


    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}*/


class Pessoa {
    nome;
    idade;
    anoDeNascimento

        constructor(nome, idade){
            this.nome = nome
            this.idade = idade
            this.anoDeNascimento = 2022 - idade
        }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}
const Isaac = new Pessoa ('Vitor', 22);
const Rennan = new Pessoa('Renna', 20);

console.log(Isaac);
console.log(Rennan);

//pessoa.nome = 'Rennan';
//pessoa.idade = 30
//pessoa.descrever();

//const atribuito = 'idade';
//console.log(pessoa[atribuito]);
//console.log(pessoa['nome']);