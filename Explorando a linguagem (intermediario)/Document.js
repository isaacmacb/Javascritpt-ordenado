document.querySelector('#titulo').innerHTML = 'Exemplo';
document.querySelector('a').innerHTML = 'Teste ancora';
document.querySelectorAll('a').forEach

let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elementos){
        elementos.innerHTML = 'teste'
})

let boxes = document.querySelectorAll('.box')
let count = 0;
boxes.forEach(function(box, index){
    count ++
    box.innerHTML = 'box ' + index + 1
})

