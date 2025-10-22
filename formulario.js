document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  //Função para verificar se o valor contém apenas letras e espaços (Validação para o campo Nome)
  function isValidName(string) {
    // Millene - M-0 I-1 L-2... indices
    for (let index = 0; index < string.length; index++) {
      let char = string[index];

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

  // Função para validar o CPF (11 digitos numérico)
  function isValidCPF(cpf) {
    //   console.log(isNaN(cpf)); // Não é numerico
    return cpf.length === 11 && !isNaN(cpf);
  }

  //Função para validar o telefone (11 digitos numéricos)
  function isValidPhone(phone) {
    return phone.length === 11 && !isNaN(phone);
  }

  // Função para validar CEP(8 dígitos numéricos)
  function isValidCEP(cep) {
    return cep.length === 8 && !isNaN(cep);
  }

  // console.log(isValidCEP("12345678"));
  // console.log(isValidCEP("123456"));
  // console.log(isValidCEP("hsu12345"));

  //Função para validar o Estado (sigla dois caracteres, apenas letras maiúsculas)
  function isValidState(state) {
    return (
      state.length === 2 &&
      state[0] >= 'A' &&
      state[0] <= 'Z' &&
      state[1] >= 'A' &&
      state[1] <= 'Z'
    );
  }

  // console.log(isValidState("SP"));
  // console.log(isValidState("sp"));
  // console.log(isValidState("SP4"));

  // Função para realizar validações
  function validarEGuardarFormulario(evento) {
    evento.preventDefault();

    //Obter os valores dos campos de input
    const nome = document.getElementById('nome').value; // responsável a retirar o espaço inicial e final da string
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    // Verificação se todos os campos estão preenchidos
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
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (!isValidName(nome)) {
      alert('O nome deve conter apenas letras e espaços');
      return;
    }

    if (!isValidCPF(cpf)) {
      alert('O CPF deve conter 11 dígitos numéricos');
      return;
    }

    if (!isValidPhone(telefone)) {
      alert('O Telefone deve conter 11 dígitos numéricos');
      return;
    }

    if (!isValidCEP(cep)) {
      alert('O CEP deve conter 8 dígitos numéricos');
      return;
    }

    if (!isValidState(estado)) {
      alert('O Estado deve ser uma sigla de letras maiúsculas');
      return;
    }

    //Se tudo estiver correto, salvar os dados no localStorage
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

    localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));
    formulario.reset();
    alert('Dados salvos com sucesso!');
  }

  //Adicionar o evento de submissão do formulário
  form.addEventListener('submit', validarEGuardarFormulario);
});
