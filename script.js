//começo declarando as variaveis que vão referenciar os nossos componentes
const resultado = document.querySelector("#resultado");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

// aqui eu fiz uma arrow function
// function() {}
const calcIMC = () => {
  // e vamos verificar se os campos são diferentes de vazio
  if (altura.value !== "" && peso.value !== "") {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    //to fixed -> para setar 2 casas decimais
    let classificacao = "";

    // if =A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada
    // condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Acima do peso";
    } else if (imc < 35) {
      classificacao = "Obesidade Grau I";
    } else if (imc < 41) {
      classificacao = "Obesidade Grau II";
    } else {
      classificacao = "Obesidade Grau III";
    }

    // innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento.

    resultado.innerHTML = `IMC: ${imc} (${classificacao})`;
  } else {
    resultado.innerHTML = "Preencha os campos";
  }
};

// utilizar virgulas
