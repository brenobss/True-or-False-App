import {modalTrue} from './modal'
import {modalFalse} from './modal'
import {transformerString} from './modal'

document.getElementById("submit").onclick = verification



function verification() {
    let operator1 = transformerString(document.getElementById("operador1").value)
    let conditional = document.getElementById("condicional").value
    let operator2 = transformerString(document.getElementById("operador2").value)


    console.log(operator1)
    console.log(conditional)
    console.log(operator2)

    switch(conditional){
        case "===":
            if (operator1 === operator2)
                modalTrue()
            else
                modalFalse()
        break
        case "!==":
            if (operator1 !== operator2)
                modalTrue()
            else
                modalFalse()
        break
        case "==":
            if (operator1 == operator2)
                modalTrue()
            else
                modalFalse()
        break
        case "!=":
            if (operator1 != operator2)
                modalTrue()
            else
                modalFalse()
        break
        case ">=":
            if (parseFloat(operator1) >= parseFloat(operator2))
                modalTrue()
            else
                modalFalse()
        break
        case "<=":
            if (parseFloat(operator1) <= parseFloat(operator2))
                modalTrue()
            else
                modalFalse()
        break
        case ">":
            if (parseFloat(operator1) > parseFloat(operator2))
                modalTrue()
            else
                modalFalse()
        break
        case "<":
            if (parseFloat(operator1) < parseFloat(operator2))
                modalTrue()
            else
                modalFalse()
        break
    }
}
