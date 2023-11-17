// Assignment Code
var generateBtn = document.querySelector("#generate");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';
const specialCharacters = "!@#$%"
const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

// Write password to the #password input
function generatePassword(length) {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }
  return password;
}

function writePassword() {
  var password = generatePassword(13);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
function onButtonClick() {
  writePassword();
}

const el = document.querySelector('#generate');
el.addEventListener('click', onButtonClick);

