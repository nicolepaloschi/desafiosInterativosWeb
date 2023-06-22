function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let inputNumber = document.getElementById("inputNumber").value;
    let result = parseInt(inputNumber);
    addSequence(inputNumber);
  }
}

function addSequence() {
  let inputNumber = document.getElementById("inputNumber").value;
  var result = parseInt(inputNumber);
  if (inputNumber === 0 || inputNumber === 1) {
    return 1;
  } else if (inputNumber < 0 || isNaN(inputNumber)) {
    alert("Digite um número positivo.");
    return;
  }

  /*for (let i = inputNumber - 1; i >= 1; i--) {
    result += i;
    console.log(result);
  }*/

  while (inputNumber > 1) {
    inputNumber--;
    result += inputNumber;
  }
  alert(`O somatório de todos os números até ${inputNumber} é ${result}.`);
}
