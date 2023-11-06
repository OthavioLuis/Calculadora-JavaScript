function soma(){
    var n1 = parseInt(document.querySelector("#num1").value);
    var n2 = parseInt(document.querySelector("#num2").value);

    var soma = n1+n2;
    console.log(soma);

    document.getElementById("result").innerHTML = soma;
}

function subtracao() {
    var n1 = parseInt(document.querySelector("#num1").value);
    var n2 = parseInt(document.querySelector("#num2").value);

    var subtracao = n1-n2;
    console.log(subtracao);

    document.getElementById("result").innerHTML = subtracao;
}

function multiplicar(){
    var n1 = parseInt(document.querySelector("#num1").value);
    var n2 = parseInt(document.querySelector("#num2").value);

    var multiplicar =n1*n2;
    console.log(multiplicar);

    document.getElementById("result").innerHTML = multiplicar;
}

function divisao(){
    var n1 = parseInt(document.querySelector("#num1").value);
    var n2 = parseInt(document.querySelector("#num2").value);

    var divisao =n1/n2;
    console.log(divisao);

    document.getElementById("result").innerHTML = divisao;
}