function sortear() {
    // Obtém os valores dos inputs do usuário
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);   
  
  
    // Inicializa um array vazio para armazenar os números sorteados
    let sorteados = [];
  
    // Verifica se o intervalo é válido (mínimo menor que máximo)
    if (de >= ate) {
      alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
      return; // Interrompe a função se o intervalo for inválido
    }
  
    // Verifica se a quantidade de números a serem sorteados é válida em relação ao intervalo
    if (quantidade > ate - de + 1) {
      alert("A quantidade precisa ser menor que o intervalo selecionado");
      return; // Interrompe a função se a quantidade for inválida
    }
  
    // Gera a quantidade de números aleatórios solicitada
    for (let i = 0; i < quantidade; i++) {
      // Gera um número aleatório dentro do intervalo
      numero = obterNumeroAleatorio(de, ate);
      // Enquanto o número já estiver sido sorteado, gera outro
      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
      }
      // Adiciona o número ao array de sorteados
      sorteados.push(numero);
    }
  
    // Exibe os números sorteados na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
  
    // Altera o estado de um botão (provavelmente habilita ou desabilita)
    alterarStatusBotao();
  }
  
  function obterNumeroAleatorio(min, max) {
    // Gera um número aleatório entre min (inclusive) e max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function alterarStatusBotao() {
    // Obtém o botão a ser alterado
    let botao = document.getElementById("btn-reiniciar");
    // Remove a classe que indica o estado atual e adiciona a classe do novo estado
    // (a lógica exata depende das classes definidas no CSS)
    if (botao.classList.contains("container__botao-desabilitado")) {
      botao.classList.remove("container__botao-desabilitado");
      botao.classList.add("container__botao");
    } else {
      botao.classList.remove("container__botao");
      botao.classList.add("container__botao-desabilitado");
    }
  }
  
  function reiniciar()   
   {
    // Obtém o botão de reiniciar
    let botao = document.getElementById("btn-reiniciar");
    // Verifica se o botão está habilitado
    if (botao.classList.contains("container__botao")) {
      // Limpa os campos de entrada
      document.getElementById("quantidade").value = "";
      document.getElementById("de").value = "";
      document.getElementById("ate").value = "";
      // Limpa o campo de resultado
      document.getElementById("resultado").innerHTML = "<label class='texto__paragrafo'>Números sorteados:  nenhum até agora</label>";
      // Altera o estado do botão
      alterarStatusBotao();
    }
  }