export function modalTrue(){
    document.getElementById("exampleModalLabel").innerHTML = "Resultado"
    document.getElementById("modalBody").innerHTML = "TRUE"
    }

export function modalFalse(){
    document.getElementById("exampleModalLabel").innerHTML = "Resultado"
    document.getElementById("modalBody").innerHTML = "FALSE"
}

export function transformerString(operator){
    if (operator.includes("'") || operator.includes("\"")){
        operator = operator.replaceAll("'", "")
        operator = operator.replaceAll("\"", "")
        operator = operator.toString()
        console.log("Esse ta com String", operator)
        return operator.toString()
    }
    else return operator
}