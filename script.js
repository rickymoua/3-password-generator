// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables

var numOfCharacters;
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var useUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var numbers = "1234567890";
var passLength
var password = '';


function howManyCharacters() {
  var numOfCharacters = parseInt( prompt("How many characters"));

}

function useLowerCase() {
 var uselowerCase = confirm("do you want to use lower case?");
  console.log = (LowerCase)
  
}

function generatePassword() {
  console.log("start here")
 
  var passLength = prompt("Choose however many characters you want for your password. \nCharacters must be at least 8 characters and no more than 128 characters");
  var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);
    
    if (lengthConfirm) {
      if (confirm("Would you like to use lowercase characters?") == true) {
          LowerCase= true
      } 

      if (confirm("Would you like to use uppercase characters?") == true) {
          useUpperCase = true
      }

      if (confirm("Would you like to use special characters?") == true) {
          numOfCharacters = true
      }

      if (confirm("Would you like to use numerical characters?") == true) {
          numbers = true
      }
      if (useLowerCase === false && useUpperCase === false && numOfCharacters === false && numbers === false) {
        alert("At least one character type must be selected")
    }
  }
    var numOfCharacters = '';
    characters += (LowerCase ? lower : '');
    characters += (useUpperCase ? upper : '');
    characters += (numOfCharacters ? special : '');
    characters += (numbers? numbers : '');

    password = password(lengthConfirm, characters);
    document.getElementById("password").innerHTML = password;

  }
// Write password to the #password input
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);