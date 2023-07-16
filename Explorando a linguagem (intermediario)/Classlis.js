// Obtém o elemento com o ID "meuElemento"
var elemento = document.getElementById("meuElemento");

// Adiciona uma classe ao elemento
elemento.classList.add("minhaClasse");

// Remove uma classe do elemento
elemento.classList.remove("outraClasse");

// Verifica se o elemento possui uma classe específica
if (elemento.classList.contains("minhaClasse")) {
  console.log("O elemento possui a classe 'minhaClasse'");
}

// Obtém todas as classes do elemento em forma de matriz
var classes = elemento.classList;

// Itera sobre as classes do elemento
for (var i = 0; i < classes.length; i++) {
  console.log(classes[i]);
}
