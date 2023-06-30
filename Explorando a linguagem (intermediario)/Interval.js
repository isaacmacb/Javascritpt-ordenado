setInterval(function(){
    console.log("vai rodar a cada 1 segundo");
}, 1000)

setInterval(function(){
    var elemento = document.getElementById('meuElemento');
    elemento.innerHTML = 'Nova mensagem sendo gerada a casa 2 segundo'
}, 2000);