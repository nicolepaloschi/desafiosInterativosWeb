function addSequence(inputNum) {
  var result = parseInt(inputNum);

  if (inputNum === 0 || inputNum === 1) {
    return 1;
  } else if (inputValue < 0) {
    alert("Escolha um número positivo");
    return;

    while (inputNum > 1) {
      inputNum--;

      result += inputNum;
    }
    alert(result);
  }
}
