//Questão 7: Como você pode usar uma declaração if, else if, else para verificar se um número é múltiplo de 2, 3 ou 5 em JavaScript?

let numb = 15;
if (numb % 2 === 0) {
    console.log("Multiplo de 2")
} else if (numb % 3 === 0) {
    console.log("Multiplo de 3") 
} else if (numb % 5 === 0) {
    console.log("Multiplo de 5")
} else {
    console.log("Não é multiplo de nenhum")
}

