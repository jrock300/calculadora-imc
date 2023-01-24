/* Arquivo de Código Javascript */

function limparCampos(){
    // Limpa os campos
    document.querySelector('#peso').value = "";
    document.querySelector('#altura').value = "";    

    // Limpa os resultados
    document.querySelector('.valor-imc').innerHTML = "-";
    document.querySelector('.descricao-imc').innerHTML = "-";
}

function calcularImc() {
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const resultadoImc = document.querySelector('.valor-imc');
    const descricaoImc = document.querySelector('.descricao-imc');


    // O "toFixed(2)" faz com que sejam exibidas apenas 2 casas decimais apos a vírgula
    const imc = (peso / (altura * altura)).toFixed(2);

    if (peso === '' || altura === ''){

        // Exibe no HTML que o usuário deve preencher os camos corretamente
        descricaoImc.innerHTML = "Preencha todos os campos, para obter seu IMC.";

    } else if (imc < 18.5) {

        // Exibe no HTML o resultado do IMC
        resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
        descricaoImc.innerHTML = 'Você está abaixo do peso.';

    } else if (imc >= 18.5 && imc <= 24.99){

        // Exibe no HTML o resultado do IMC
        resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
        descricaoImc.innerHTML = 'Você está no seu peso ideal.';

    } else if (imc >= 25.0 && imc <= 29.99){

        // Exibe no HTML o resultado do IMC
        resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
        descricaoImc.innerHTML = 'Você está em sobrepeso 1.';

    } else if (imc >= 30.0 && imc <= 39.99){

        // Exibe no HTML o resultado do IMC
        resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
        descricaoImc.innerHTML = 'Você está em obesidade grau 2.';

    } else if (imc > 40.0){

        // Exibe no HTML o resultado do IMC
        resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
        descricaoImc.innerHTML = 'Você está em obesidade grau 3 ( Grave ).';
    }
}
