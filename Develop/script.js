// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

function howManyCharacters() {
  numOfCharacters = parseInt( prompt("How many characters"));

}

function useLowerCase() {
  lowerCase = lowerCase.toLowerCase();
  console.log(useLowerCaseLtrs)

}

function generatePassword() {
  console.log("start here")
  howManyCharacters( );
  useLowerCase();

  return "password"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
