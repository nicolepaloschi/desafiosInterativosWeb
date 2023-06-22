function guessNumber() {
  while (true) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guess;

    do {
      guess = prompt("Digite seu palpite (um número de 0 a 100):");

      if (guess === null || guess === "") {
        return;
      } else {
        guess = parseInt(guess);
      }

      if (isNaN(guess) || guess < 0 || guess > 100) {
        alert("Valor inválido. Escolha um número entre 0 e 100.");
      } else if (guess < randomNumber) {
        alert(`O seu palpite foi ${guess}. Meu número é maior.`);
      } else if (guess > randomNumber) {
        alert(`O seu palpite foi ${guess}. Meu número é menor.`);
      } else if (guess === randomNumber) {
        alert(`Parabéns! Você acertou! Eu tinha sorteado o valor ${guess}!`);
        break;
      }
    } while (guess !== randomNumber);

    var playAgain = confirm("Você quer jogar novamente?");
    if (!playAgain) {
      break;
    }
  }
}
