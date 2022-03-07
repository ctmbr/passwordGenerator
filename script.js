// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

//create buckets

function generatePassword() {
    var useUpperCase = confirm("Uppercase?");
    var useLowerCase = confirm("Lowercase?");
    var useSpecials = confirm("Special characters?");
    var useNumbers = confirm("Numbers?");
}
// 1. get user preferences
// 2. Identify and collect bucket(s) user chose.
// 3. Create a guaranteed collection
