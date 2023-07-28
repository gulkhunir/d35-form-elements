let inputElement = document.getElementById("product-name");
let remainingChars = document.getElementById("remaining-chars");
let maxChar = inputElement.maxLength;

function retrieveUserInput(event) {
  //let enteredText = inputElement.value;
  let enteredText = event.target.value;
  //let enteredText = event.data;
  kalanSayi = maxChar - enteredText.length;
  remainingChars.textContent = kalanSayi;

  if (kalanSayi === 0) {
    remainingChars.classList.add("error");
    inputElement.classList.add("error");
  } else if (kalanSayi <= 10) {
    remainingChars.classList.add("warning");
    inputElement.classList.add("warning");
    remainingChars.classList.remove("error");
    inputElement.classList.remove("error");
  } else {
    remainingChars.classList.remove("warning", "error");
    inputElement.classList.remove("warning", "error");
  }
}

inputElement.addEventListener("input", retrieveUserInput);
