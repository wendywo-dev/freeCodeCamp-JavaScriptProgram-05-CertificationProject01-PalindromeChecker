const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const checkForPalindrome = (userInput) => {
  const originalInput = userInput; //save user original input for further use

  if (userInput === "") {
    alert("Please input a value");
    return;
  }

  //Remove previous result
  resultDiv.replaceChildren();

  const lowerCaseString = userInput.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let resultMessage = `<strong>${originalInput}</strong> ${
    lowerCaseString === [...lowerCaseString].reverse().join("")
      ? "is"
      : "is not"
  } a palindrome.`;

  const pTag = document.createElement("p");
  pTag.className = result.message;
  pTag.innerHTML = resultMessage;
  resultDiv.appendChild(pTag);

  resultDiv.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
  checkForPalindrome(textInput.value);
  textInput.value = "";
});

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(textInput.value);
    textInput.value = "";
  }
});
