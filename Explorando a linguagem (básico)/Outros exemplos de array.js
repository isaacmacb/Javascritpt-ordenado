const frutas = [ 'Banana', 'Laranja', 'Maça', 'Goiaba']
frutas.push ('Mamão')
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift();
console.log(frutas);

frutas.unshift('Melão')
console.log(frutas);

const frutas1 = [ 'Banana', 'Laranja', 'Maça', 'Goiaba']
const frutas2 = [ 'Banana', 'Laranja', 'Maça', 'Goiaba']
const combinandoFrutas = frutas1.concat(frutas2);
console.log(combinandoFrutas);

const frutas3 = [ 'Banana', 'Laranja', 'Maça', 'Goiaba']
const sliceFrutas = frutas3.slice(1,2);
console.log(frutas3);

const frutas4 = [ 'Banana', 'Laranja', 'Maça', 'Goiaba']
frutas4.forEach(frutas4 => {
    console.log(frutas4);
})

