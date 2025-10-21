//Função para verificar se o valor contém apenas letras e espaços (Validação para o campo Nome)
function isValidName(nome) {
  for (let i = 0; i < nome.length; i++) {
    //let char = nome[i];
    //if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
    if (!/^[a-zA-Z\s]+$/.test(nome[i])) {
      // Expressão regular para verificar se o caractere é uma letra ou espaço
      return false;
    }
  }
  return true;
}
//funcião para verificar se o CPF contém 11 caracteres e é um número
function isValidCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}
//funcão para verificar se o telefone contém 11 caracteres e é um número
function isValidTelefone(telefone) {
  return telefone.length === 11 && !isNaN(telefone);
}
//funcão para verificar se o CEP contém 8 caracteres e é um número
function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}
//funcão para verificar se o estado contém apenas duas letras Maiusculas
function isValidEstado(estado) {
  return /^[A-Z]{2}$/.test(estado);
}

function validarEGuardarFormulario(event) {
  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();
}
