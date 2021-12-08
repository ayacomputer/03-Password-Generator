// Assignment Code
var generateBtn = document.querySelector('#generate');

var specialChar = '§!@#$%^&*()_+?><{}[]'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number = '0123456789'




function generatePassword() {
  var randomPassword = "";
  var choice = "";
  var pwLength = prompt("Enter the password length(8 - 128 characters)")
  if (isNaN(pwLength)) {
    alert("Please enter a valid number.");
    generatePassword();
    return;
  } else if (pwLength < 8 || pwLength > 128) {
    alert("The number is too small or too big.");
    generatePassword();
    return;
  }

  var spCharConfirm = confirm("Do you want to include special characters?");
  if (spCharConfirm) {
    choice += specialChar;
    randomPassword += specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    pwLength--;
  }
  var lowCharConfirm = confirm("Do you want to include lowercase alphabets?");
  if (lowCharConfirm) {
    choice += lowerCase;
    randomPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    pwLength--;
  }
  var upCharConfirm = confirm("Do you want to include uppercase alphabets?");
  if (upCharConfirm) {
    choice += upperCase;
    randomPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    pwLength--;
  }
  var numConfirm = confirm("Do you want to include numbers?");
  if (numConfirm) {
    choice += number;
    randomPassword += number.charAt(Math.floor(Math.random() * number.length));
    pwLength--;
  }
  if (!spCharConfirm && !lowCharConfirm && !upCharConfirm && !numConfirm) {
    alert("We need some characters to make your password.");
    generatePassword();
    return;
  }

  for (let i = 0; i < pwLength; i++) {
    randomPassword += choice.charAt(Math.floor(Math.random() * choice.length));
  }
  //randomly mixing the password//
  var sliceLength = Math.floor(Math.random() * randomPassword.length);
  var slice1 = randomPassword.slice(0, sliceLength);
  var slice2 = randomPassword.slice(sliceLength, password.length);
  return slice2 + slice1;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)