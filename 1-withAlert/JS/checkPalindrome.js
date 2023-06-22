function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let words = document.getElementById("inputWords").value.toLowerCase();
    checkPalindrome(words);
  }
}

function checkPalindrome() {
  let words = document.getElementById("inputWords").value.toLowerCase();
  let cleanWords = words.replace(/[^a-zA-Z0-9]/g, "");
  let reversedWords = cleanWords.split("").reverse().join("");

  if (cleanWords === reversedWords) {
    alert(`"${words}" é um palíndromo.`);
  } else {
    alert(`"${words}" não é um palíndromo.`);
  }
}
