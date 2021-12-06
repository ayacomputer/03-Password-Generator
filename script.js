// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ['!', '@', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', ',']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("Choose the password length(between 8 - 128 characters)")
  if (!Number.isNaN) {
    alert("Please enter a number.")
    length();
  } else if (length < 8 || length > 128) {
    alert("The number is too small or too big.")
    length();
  }

  var specialChar = confirm("Do you want special characters?")
}

generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
