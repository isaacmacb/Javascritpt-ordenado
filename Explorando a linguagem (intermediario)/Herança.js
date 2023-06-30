function Animal(nome){
    this.nome = nome;
}

Animal.prototype.falar = function (){
    console.log("O Animal está falando");
}

function Cachorro (nome, raca) {
    Animal.call(this.nome)
    this.raca = raca;
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function(){
    console.log("O cachorro está latindo");
}

var meuCachorro = new Cachorro("Rex", "Labrador");
meuCachorro.falar();
meuCachorro.latir();