function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let word = document.getElementById("inputWord").value.toLowerCase();
    hideVowels(word);
  }
}

function hideVowels() {
  let word = document.getElementById("inputWord").value.toLowerCase();
  let noVowels = word.replace(/[aáâãeéêiíoóôõu]/gm, "*");
  alert(noVowels.toUpperCase());
}
