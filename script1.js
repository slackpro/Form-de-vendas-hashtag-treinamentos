const form = document.getElementById('form');

//Função para verificar se o valor contém apenas letras e espaços (Validação para o campo Nome)
function isValidName(nome) {
  for (let index = 0; index < nome.length; index++) {
    let char = nome[index];

    if (
      !(
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        char === ' '
      )
    ) {
      return false;
    }
  }

  return true;
}

// função para verificar se o CPF contém 11 dígitos
function isValidCPF(cpf) {
  return /^\d{11}$/.test(cpf);
}
// função para verificar se o telefone contém 11 dígitos
function isValidTelefone(telefone) {
  return /^\d{11}$/.test(telefone);
}
// função para verificar se o CEP contém 8 dígitos
function isValidCEP(cep) {
  return /^\d{8}$/.test(cep);
}
// função para verificar se o estado contém apenas duas letras maiúsculas
function isValidEstado(estado) {
  return /^[A-Z]{2}$/.test(estado);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

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

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (!isValidName(nome)) {
    alert('O nome deve conter apenas letras e espaços.');
    return;
  }

  if (!isValidCPF(cpf)) {
    alert('O CPF deve conter 11 caracteres numéricos.');
    return;
  }

  if (!isValidTelefone(telefone)) {
    alert('O telefone deve conter 11 caracteres numéricos.');
    return;
  }

  if (!isValidCEP(cep)) {
    alert('O CEP deve conter 8 caracteres numéricos.');
    return;
  }

  if (!isValidEstado(estado)) {
    alert('O estado deve conter apenas duas letras maiúsculas.');
    return;
  }

  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };
  localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario)); //Armazena os dados do formulário no localStorage
  form.reset();
  alert('Dados salvos com sucesso!');
});
