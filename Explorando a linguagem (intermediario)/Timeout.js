setTimeout(function(){
    console.log('Execução após 2 segundos');
},2000)

function myFunction (){
    console.log('Execução após 3 segundos');
}

setTimeout(myFunction, 3000)