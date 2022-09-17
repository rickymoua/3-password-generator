// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables

var numOfCharacters;
var useLowerCase; 

function howManyCharacters() {
  numOfCharacters = parseInt( prompt("How many characters"));

}

function useLowerCase() {
  uselowerCase = confirm("do you want to use lower case?");
  console.log(useLowerCase)
  
}

function generatePassword() {
  console.log("start here")
  howManyCharacters( );
  useLowerCase();

  return " final password"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#LR654321*");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
