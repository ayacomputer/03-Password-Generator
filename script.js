// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = '§!@#$%^&*()_+?><{}[]'.split();
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split();
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split();
var number = '0123456789'.split();
var choice = {
  sp: 0,
  low: 0,
  up: 0,
  num: 0,
  length: 0
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var inputLength = prompt("Choose the password length(8 - 128 characters)")
  if (!Number.isNaN) {
    alert("Please enter a valid number.");
    generatePassword();
  } else if (inputLength < 8 || inputLength > 128) {
    alert("The number is too small or too big.");
    generatePassword();
  } else {
    choice.length = inputLength;
  }
  if (!spCharConfirm && !lowCharConfirm && !upCharConfirm && !numConfirm) {
    alert("We need some characters to make your password");
    generatePassword();
  }
  var spCharConfirm = confirm("Do you want to include special characters?");
  if (spCharConfirm) {
    choice.sp++;
  }
  var lowCharConfirm = confirm("Do you want to include lowercase alphabets?");
  if (lowCharConfirm) {
    choice.low++;
  }
  var upCharConfirm = confirm("Do you want to include uppercase alphabets?");
  if (upCharConfirm) {
    choice.up++;
  }
  var numConfirm = confirm("Do you want to include numbers?");
  if (numConfirm) {
    choice.num++;
  }


}


generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
