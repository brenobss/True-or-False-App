
document.getElementById("submit").onclick = verification

function verification() {
    let operator1 = document.getElementById("operador1").value
    let conditional = document.getElementById("condicional").value
    let operator2 = document.getElementById("operador2").value

    switch(conditional){
        case "=":
            if (operator1 == operator2)
                
              
            else
                alert("FALSE")
    }
}
