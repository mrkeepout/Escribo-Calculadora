const readline = require('readline');

// Interface para leitura e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funcao que permite a realização do somatorio
function somatorioDivisiveis3ou5(numero) {
  
  //inicializacao de variaveis
  let somatorio = 0;

  //algoritmo de somatorio. Para todo numero divisivel por 3 ou 5, some ele aos seus inferiores
  for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }
  // retorno para a funcao chamadora
  return somatorio;
}

  // Solicitar input do usuário
rl.question('Olá! Informe um número para o cálculo do somatório: ', (numeroInformado) => {
  numeroInformado = parseInt(numeroInformado, 10);

  // Tratamento de erro para dados inválidos
  if (isNaN(numeroInformado) || numeroInformado < 0) {
    console.log('Por favor, insira um número válido e positivo.');
    rl.close();
    return;
  }
  // Impressao do resultado no terminal
  let resultado = somatorioDivisiveis3ou5(numeroInformado);
  console.log(`O somatório dos valores divisíveis por 3 ou 5 menores que ${numeroInformado} é ${resultado}`);

  // Fecha a interface de leitura e saída de dados
  rl.close();
});
