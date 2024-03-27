//Questão 6: Como você pode usar uma declaração if, else if, else para determinar a estação do ano com base no mês em JavaScript?

let data = "01/01";

if(data === "21/03" || data === "21/06") {
    console.log("Estação do ano: OUTONO")
} else if(data === "22/06" || data === "23/09" ) {
    console.log("Estação do ano: INVERNO")
} else if(data === "24/09" || data === "21/12") {
    console.log("Estação do ano: PRIMAVERA")
} else {
    console.log("Estação do ano: VERÃO")
}