//Questão 5: Como você pode usar uma declaração if, else if, else para verificar se um número é par, ímpar ou zero em JavaScript?

let numb = 2084;

if(numb % 2 == 0 && numb != 0 ) {
    console.log("Número par")
} else if(numb % 2 == 1) {
    console.log("Número impar")
} else {
    console.log("Zero")
}