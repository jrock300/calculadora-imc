/* Refatorando código - 26-04-2026 */

// Referenciando elementos do HTML
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const valorImc = document.querySelector(".valor-imc");
const descricaoImc = document.querySelector(".descricao-imc");
const btnCalcular = document.querySelector("#btnCalcular");
const btnLimpar = document.querySelector("#btnLimpar");

// Limpa Campos
const limparCampos = () => {
  // Limpa os campos
  peso.value = "";
  altura.value = "";

  // Limpa os resultados
  valorImc.textContent = "-";
  descricaoImc.textContent = "-";
};

// Ler Dados
const lerDados = () => {
  uPeso = Number(peso.value.replace(",", "."));
  uAlt = Number(altura.value.replace(",", "."));
  return { uPeso, uAlt };
};

// Valida Dados
const validaDados = (peso, altura) => {
  if (!peso || isNaN(peso) || peso <= 0) {
    descricaoImc.textContent = "Digite um peso válido.";
    return false;
  }

  if (!altura || isNaN(altura) || altura <= 0) {
    descricaoImc.textContent = "Digite um peso válido.";
    return false;
  }
  return true;
};

// Calcula IMC
const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc;
};

// Classifica o IMC
const classificaIMC = (imc) => {
  const classificacoes = [
    {
      limite: 18.5,
      descricao: `O seu IMC é ${imc.toFixed(2)}, você está ABAIXO DO PESO.`,
    },
    {
      limite: 25,
      descricao: `O seu IMC é ${imc.toFixed(2)}, você está no PESO IDEAL.`,
    },
    {
      limite: 30,
      descricao: `O seu IMC é ${imc.toFixed(2)}, você está em SOBREPESO.`,
    },
    {
      limite: 35,
      descricao: `O seu IMC é ${imc.toFixed(2)}, você está em OBESIDADE GRAU 1.`,
    },
    {
      limite: 40,
      descricao: `O seu IMC é ${imc.toFixed(2)}, você está em OBESIDADE GRAU 2.`,
    },
    {
      limite: Infinity,
      descricao: `O seu IMC é ${imc.toFixed(2)}, você está em OBESIDADE GRAU 3.`,
    },
  ];

  for (let classificacao of classificacoes) {
    if (imc < classificacao.limite) {
      return classificacao;
    }
  }
};

// Exibe Resultado
const exibeResultado = (imc) => {
  valorImc.textContent = imc.limite;
  descricaoImc = imc.descricao;
};

// Event listener dos botões
btnLimpar.addEventListener("click", limparCampos);
btnCalcular.addEventListener("click", calcularIMC);

// function calcularImc() {
//   const peso = document.querySelector("#peso").value;
//   const altura = document.querySelector("#altura").value;
//   const resultadoImc = document.querySelector(".valor-imc");
//   const descricaoImc = document.querySelector(".descricao-imc");

//   // O "toFixed(2)" faz com que sejam exibidas apenas 2 casas decimais apos a vírgula
//   const imc = (peso / (altura * altura)).toFixed(2);

//   if (peso === "" || altura === "") {
//     // Exibe no HTML que o usuário deve preencher os camos corretamente
//     descricaoImc.innerHTML = "Preencha todos os campos, para obter seu IMC.";
//   } else if (imc < 18.5) {
//     // Exibe no HTML o resultado do IMC
//     resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
//     descricaoImc.innerHTML = "Você está abaixo do peso.";
//   } else if (imc >= 18.5 && imc <= 24.99) {
//     // Exibe no HTML o resultado do IMC
//     resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
//     descricaoImc.innerHTML = "Você está no seu peso ideal.";
//   } else if (imc >= 25.0 && imc <= 29.99) {
//     // Exibe no HTML o resultado do IMC
//     resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
//     descricaoImc.innerHTML = "Você está em sobrepeso 1.";
//   } else if (imc >= 30.0 && imc <= 39.99) {
//     // Exibe no HTML o resultado do IMC
//     resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
//     descricaoImc.innerHTML = "Você está em obesidade grau 2.";
//   } else if (imc > 40.0) {
//     // Exibe no HTML o resultado do IMC
//     resultadoImc.innerHTML = `O seu IMC é de: ${imc}`;
//     descricaoImc.innerHTML = "Você está em obesidade grau 3 ( Grave ).";
//   }
// }
