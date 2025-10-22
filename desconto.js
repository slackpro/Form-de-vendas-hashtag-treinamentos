function toggleDiscount() {
  const discountBody = document.getElementById('aply-discount-body');
  const icon = document.getElementById('toggle-icon');

  if (
    discountBody.style.display === 'none' ||
    discountBody.style.display === ''
  ) {
    discountBody.style.display = 'block';
    icon.classList.add('bx-chevron-up');
    icon.classList.remove('bx-chevron-down');
  } else {
    discountBody.style.display = 'none';
    icon.classList.add('bx-chevron-down');
    icon.classList.remove('bx-chevron-up');
  }
}

const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};

function applyDiscount() {
  const discountCode = document
    .getElementById('discount-code')
    .value.trim()
    .toUpperCase();
  const discountMessageElement = document.getElementById('discount-message');
  const totalPriceElement = document.getElementById('total-price');

  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    console.log(discount);
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(
      2
    )}`;

    // if (discountCode === 'DESCONTO10') {
    //   discountMessageElement.style.display = 'block';
    // } else if (discountCode === 'DESCONTO20') {
    //   discountMessageElement.style.display = 'block';
    //   discountMessageElement.innerText = 'Desconto de DESCONTO20 aplicado';
    // } else {
    //   discountMessageElement.style.display = 'block';
    //   discountMessageElement.innerText = 'Desconto de DESCONTO50 aplicado';
    // }

    localStorage.setItem('discount', discountCode);

    discountMessageElement.style.color = 'green';
    discountMessageElement.innerText = `Desconto de ${discountCode} aplicado`;
  } else {
    discountMessageElement.style.color = 'red';
    discountMessageElement.innerText = 'Cupom inválido';
  }
}

function checkStoredDiscount() {
  //Limpar a mensagem de disconto e o localStorage
  const storedDiscount = localStorage.getItem('discount');
  const discountMessage = document.getElementById('discount-message');

  if (storedDiscount) {
    localStorage.removeItem('discount');
  }
  //discountMessage.innerText = '';
}

window.onload = checkStoredDiscount;
