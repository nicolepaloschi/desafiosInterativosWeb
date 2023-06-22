function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let inputNumber = parseInt(document.getElementById("inputNumber").value);
    factorial(inputNumber);
  }
}

function factorial() {
  let inputNumber = parseInt(document.getElementById("inputNumber").value);
  if (inputNumber === 0 || inputNumber === 1) {
    return 1;
  } else if (inputNumber < 0 || isNaN(inputNumber)) {
    alert("Digite um número positivo.");
    return;
  } else if (!Number.isInteger(inputNumber)) {
    alert("Digite um número inteiro.");
  }

  /*for (let i = inputNumber - 1; i >= 1; i--) {
    result += i;
    console.log(result);
  }*/
  let result = inputNumber;
  while (inputNumber > 1) {
    inputNumber--;
    result *= inputNumber;
  }
  alert(`O somatório de todos os números até ${inputNumber} é ${result}.`);
}
