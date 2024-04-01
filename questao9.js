//Questão 9: Como você pode usar uma declaração if, else if, else para classificar um triângulo em equilátero, isósceles ou escaleno com base em seus lados em JavaScript?

let l1 = 10;
let l2 = 20;
let l3 = 1;

if(l1 === l2 && l2 === l3) {
    console.log("Triângulo Equilátero")
} else if(l1 === l2 || l2 === l3 || l1 === l3) {
    console.log("Triângulo Isóceles")
} else if(l1 != l2 || l2 != l3 || l3 != l1){
    console.log("Triângulo Escaleno")
} else {
    console.log("Num é triângulo")
}