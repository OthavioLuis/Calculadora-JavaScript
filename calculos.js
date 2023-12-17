function calcular(operacao) {

    var n1 = parseInt(document.querySelector("#num1").value);
    var n2 = parseInt(document.querySelector("#num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite números válidos")
        return;
    }
    
    var resultado;

    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            if (n2 !== 0) {
                resultado = n1 / n2; 
            } else {
                alert("Impossivel dividir por 0");
                return;
            }
            break;
        default:
            alert("Operação Inválida.");
            return;
    }
    console.log(resultado);
    document.getElementById("result").innerHTML = resultado;
}