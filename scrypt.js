
//criar função para somar
document.getElementById('button').onclick = function soma (e) {
    e.preventDefault();
    //define variaveis para os inputs do html
    let valor1 = parseInt(document.getElementById('number1').value);
    let valor2 = parseInt(document.getElementById('number2').value); 

    let resultSoma = valor1 + valor2;

    //mostrar o resultado no input result
    document.getElementById('totalSoma').innerHTML = resultSoma;
}