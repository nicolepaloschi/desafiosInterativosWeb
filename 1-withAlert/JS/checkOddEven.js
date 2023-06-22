function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var inputValue = parseInt(document.getElementById("inputValue").value);
    checkOddEven(inputValue);
  }
}

function checkOddEven(inputValue) {
  if (isNaN(inputValue)) {
    alert("Digite um número!");
    return;
  }

  if (inputValue % 2 === 0) {
    alert(`O número ${inputValue} é par.`);
  } else {
    alert(`O número ${inputValue} é ímpar.`);
  }
}
