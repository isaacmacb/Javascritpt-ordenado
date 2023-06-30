function checkEvenOrOdd (number){
    if(number %2 ===0){
        return "even"
    } else {
        return "Odd"
    }
}
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));

function checkVotingEligibility (age) {
    if(age < 18){
        return "Não pode votar, não é obrigatorio"
    } else if (age => 18 && age < 60){
        return "Acessivel a votação"
    } else {
        return "Senior ciizien"
    }
}

console.log(checkVotingEligibility(16));
console.log(checkVotingEligibility(25));
console.log(checkVotingEligibility(70));