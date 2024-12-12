// No nosso dia a dia, o uso de senhas é algo comum, pois usamos muitos sistemas ou aplicativos diferentes.
// Como recomendação de segurança, é necessário que para cada aplicativo que usamos, seja gerada uma senha segura.
// Usando a técnica de arrays
// gere 5 senhas que contenham pelo menos
// 10 caracteres, contendo pelo menos 5 letras, sendo 2 maiúsculas e 2 minúsculas, 2 números e um caractere especial (ponto, hashtag, barra, ponto de interrogação, arroba).
// Use a tabela ASCII como base para gerar caracteres aleatórios.


// Função para gerar uma senha segura
function gerarSenha(): string {

  // Definindo o conjunto de caracteres possíveis
  const letrasMaiusculas = gerarLetrasMaiusculas();
  const letrasMinusculas = gerarLetrasMinusculas();
  const numeros = gerarNumeros();
  const caracteresEspeciais = caracterEspecial();

  // Concatenando todos os conjuntos de caracteres possíveis
  const todosCaracteres = [...letrasMaiusculas, ...letrasMinusculas, ...numeros, ...caracteresEspeciais];

  // Garantindo que a senha tenha pelo menos:
  let senha = '';

  senha += escolherCaractere(letrasMaiusculas); // Adiciona uma letra maiúscula
  senha += escolherCaractere(letrasMaiusculas); // Adiciona outra letra maiúscula
  senha += escolherCaractere(letrasMinusculas); // Adiciona uma letra minúscula
  senha += escolherCaractere(letrasMinusculas); // Adiciona outra letra minúscula
  senha += escolherCaractere(numeros); // Adiciona um número
  senha += escolherCaractere(numeros); // Adiciona outro número
  senha += escolherCaractere(caracteresEspeciais); // Adiciona um caractere especial

  // Preenchendo o restante da senha (pelo menos 10 caracteres) com caracteres aleatórios
  while (senha.length < 10) {
    senha += escolherCaractere(todosCaracteres); // Adiciona um caractere aleatório do conjunto completo
  }

  // Embaralhando os caracteres da senha para garantir uma distribuição aleatória
  senha = senha.split('').sort(function() { return Math.random() - 0.5 }).join(''); // Embaralha os caracteres da senha
  return senha; // Retorna a senha gerada
}

// Função para escolher um caractere aleatório de um array
function escolherCaractere(array: string[]): string {
  const indiceAleatorio = Math.floor(Math.random() * array.length); // Gera um índice aleatório
  return array[indiceAleatorio]; // Retorna o caractere no índice aleatório
}

// Função para gerar letras maiúsculas (A-Z) usando códigos ASCII
function gerarLetrasMaiusculas(): string[] {
  const letrasMaiusculas = [];
  for (let i = 65; i <= 90; i++) { // ASCII codes for A-Z
    letrasMaiusculas.push(String.fromCharCode(i));
  }
  return letrasMaiusculas;
}

// Função para gerar letras minúsculas (a-z) usando códigos ASCII
function gerarLetrasMinusculas(): string[] {
  const letrasMinusculas = [];
  for (let i = 97; i <= 122; i++) { // ASCII codes for a-z
    letrasMinusculas.push(String.fromCharCode(i));
  }
  return letrasMinusculas;
}

// Função para gerar números (0-9)
function gerarNumeros(): string[] {
  return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
}

function caracterEspecial() {
  return ['.', '#', '/', '?', '@', '!', '$', '%', '&', '*', '+', '-', '=', '~', '^', '_', '`', '{', '}', '[', ']', '(', ')', '<', '>', '|'];
}

// Gerando 5 senhas seguras e armazenando-as em um array
const senhas = [];
for (let i = 0; i < 5; i++) {
  senhas.push(gerarSenha()); // Gera e adiciona uma senha ao array
}

// Exibindo as senhas geradas no console
console.log(senhas); // Mostra as senhas geradas no console
