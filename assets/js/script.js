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
    descricaoImc.textContent = "Digite uma altura válida.";
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
      descricao: `você está ABAIXO DO PESO.`,
    },
    {
      limite: 25,
      descricao: `você está no PESO IDEAL.`,
    },
    {
      limite: 30,
      descricao: `você está em SOBREPESO.`,
    },
    {
      limite: 35,
      descricao: `você está em OBESIDADE GRAU 1.`,
    },
    {
      limite: 40,
      descricao: `você está em OBESIDADE GRAU 2.`,
    },
    {
      limite: Infinity,
      descricao: `você está em OBESIDADE GRAU 3.`,
    },
  ];

  for (let classificacao of classificacoes) {
    if (imc < classificacao.limite) {
      return classificacao;
    }
  }
};

// Exibe Resultado
const exibeResultado = (imc, descricao) => {
  valorImc.textContent = `Seu IMC é ${imc.toFixed(2)}`;
  descricaoImc.textContent = descricao.descricao;
};

// Função que executa o fluxo
const executar = () => {
  const dados = lerDados();
  if (!validaDados(dados.uPeso, dados.uAlt)) {
    valorImc.textContent = "-";
    return;
  }
  const imcCalc = calcularIMC(dados.uPeso, dados.uAlt);
  const resultadoIMC = classificaIMC(imcCalc);
  exibeResultado(imcCalc, resultadoIMC);
};

// Event listener dos botões
btnLimpar.addEventListener("click", limparCampos);
btnCalcular.addEventListener("click", executar);
