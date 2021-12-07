// Assignment Code
var generateBtn = document.querySelector('#generate');

var specialChar = '§!@#$%^&*()_+?><{}[]'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number = '0123456789'
var choice = ""
var randomPassword = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pwLength = prompt("Choose the password length(8 - 128 characters)")
  if (!Number.isNaN) {
    alert("Please enter a valid number.");
    generatePassword();
  } else if (pwLength < 8 || pwLength > 128) {
    alert("The number is too small or too big.");
    generatePassword();
  }

  var spCharConfirm = confirm("Do you want to include special characters?");
  if (spCharConfirm) {
    choice += specialChar;
  }
  var lowCharConfirm = confirm("Do you want to include lowercase alphabets?");
  if (lowCharConfirm) {
    choice += lowerCase;
  }
  var upCharConfirm = confirm("Do you want to include uppercase alphabets?");
  if (upCharConfirm) {
    choice += upperCase;
  }
  var numConfirm = confirm("Do you want to include numbers?");
  if (numConfirm) {
    choice += number;
  }
  if (!spCharConfirm && !lowCharConfirm && !upCharConfirm && !numConfirm) {
    alert("We need some characters to make your password");
    generatePassword();
  }
  for (let i = 0; i < pwLength; i++) {
    randomPassword += choice.charAt(Math.floor(Math.random() * pwLength));
  }
  return randomPassword;
}
generatePassword();

// Add event listener to generate button

generateBtn.addEventListener("click", function () {
  console.log('This button works');
  document.getElementById('#password').innerHTML = randomPassword;
  console.log(choice);
  console.log(randomPassword);
  console.log(password);
});
