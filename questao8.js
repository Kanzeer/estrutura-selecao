//Questão 8: Como você pode usar uma declaração if, else if, else para determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou idoso em JavaScript?

let idd = 71;

if(idd < 5) {
    console.log("Idade de bebê")
} else if(idd > 5 && idd < 12) {
    console.log("Idade de criança")
} else if(idd > 12 && idd < 18) {
    console.log("Idade de adolescente")
} else if(idd > 18 && idd < 60) {
    console.log("Idade de adulto")
} else {
    console.log("Idade de idoso")
}