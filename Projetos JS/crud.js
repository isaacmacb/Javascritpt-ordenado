let usuarios = [];

// push = adicionar
function adicionarUsuario (nome, idade){
    usuarios.push({nome, idade});
}

//ForEach é uma função disponível em arrays no JavaScript 
//que permite iterar sobre cada elemento do array e executar uma função para cada elemento. 
function exibirUsuarios () {
    usuarios.forEach((usuarios, indice) =>{
        console.log(`Usuario ${indice + 1}: Nome: ${usuario.nome}. Idade: ${usuario.idade}`);
    })
}

function atualizarUsuario (indice, nome, idade){
    if(indice >= 0 && indice < usuarios.length){
        usuarios[indice].nome = nome;
        usuarios[indice].idade = idade
    } else {
        console.log("Indice Inválido");
    }
function excluirUsuario (indice) {
    if(indice >= 0 && indice < usuarios.length){
        usuarios.splice(indice, 1)
    } else {
        console.log("Indice Inváliod");
    }
}
}