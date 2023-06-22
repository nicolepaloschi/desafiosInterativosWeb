function countToTen() {
  var resultElement = document.getElementById("countingResult");
  resultElement.innerHTML = "";

  var i = 1;
  var timer = setInterval(function () {
    if (i <= 10) {
      if (i % 2 === 0) {
        resultElement.innerHTML += i + " ";
      }
      i++;
    } else {
      clearInterval(timer);
    }
  }, 500);

  /*for (var i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        resultElement.innerHTML += i + "<br>";
      }
    }*/
}
