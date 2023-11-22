
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
// const lower = "abcdefghijklmnopqrstuvwxyz";
// const numb ="123456789";
// const symb = "!@#$%^&*()_+}}':><?/,.\]"

// Get references to HTML elements
const passwordInput = document.getElementById("password");
const generateButton = document.getElementById("btn");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const spacesCheckbox = document.getElementById("spaces");
const duplicateCheckbox = document.getElementById("duplicate");
const lengthRange = document.getElementById("scroll_1");

// Define character sets
const characterSets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "$%^&*#@!*()_-+=",
  spaces: "  ",
};

// Function to generate a random password
function generatePassword() {
  let characterSet = "";
  
  if (uppercaseCheckbox.checked) characterSet += characterSets.uppercase;
  if (lowercaseCheckbox.checked) characterSet += characterSets.lowercase;
  if (numbersCheckbox.checked) characterSet += characterSets.numbers;
  if (symbolsCheckbox.checked) characterSet += characterSets.symbols;
  if (spacesCheckbox.checked) characterSet += characterSets.spaces;

  if (characterSet === "") {
    alert("Please select at least one character set, to enable our App generate a password for you.");
    return;
  }

  let password = "";
  let passwordLength = lengthRange.value;

  if (!duplicateCheckbox.checked) {
    characterSet = [...new Set(characterSet.split(""))].join("");
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  passwordInput.value = password;
}

const copyButton = document.getElementById("copy");

// ...

// Function to copy the generated password to the clipboard
function copyPasswordToClipboard() {
  const password = passwordInput.value;
  
  if (password) {
    // Create a temporary input element to copy the password
    const tempInput = document.createElement("input");
    tempInput.value = password;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    // Provide some feedback to the user
    alert("Password copied to clipboard!");
  }
}

// Event listener for the copy button
copyButton.addEventListener("click", copyPasswordToClipboard);

// Event listener for the generate button
generateButton.addEventListener("click", generatePassword);