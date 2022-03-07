// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create buckets

function generatePassword() {}
// 1. get user preferences
// 2. Identify and collect bucket(s) user chose.
// 3. Create a guaranteed collection
