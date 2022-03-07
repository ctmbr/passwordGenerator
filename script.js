// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specials = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var chosenCharacters = [];
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create buckets

function generatePassword() {
    var useUpperCase = confirm("Uppercase?");
    if (useUpperCase) chosenCharacters = [...chosenCharacters, ...upperCase];
    console.log(chosenCharacters)
    var useLowerCase = confirm("Lowercase?");
    if (useLowerCase) chosenCharacters = [...chosenCharacters, ...lowerCase];
    console.log(chosenCharacters)
    var useSpecials = confirm("Special characters?");
    if (useSpecials) chosenCharacters = [...chosenCharacters, ...specials];
    console.log(chosenCharacters)
    var useNumbers = confirm("Numbers?");
    if (useNumbers) chosenCharacters = [...chosenCharacters, ...numbers];
    console.log(chosenCharacters)
    var passwordLength;

    do {
        passwordLength = prompt("Password Length? Please Enter number between 8-128.", "12")
        if (isNaN(passwordLength)) alert("The length you provided is invalid. Please try again")
    }
    while (isNaN(passwordLength))

    var finalPassword = ""

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor((Math.random() * chosenCharacters.length))
        var randomChar = chosenCharacters[randomNumber]

        finalPassword += randomChar
        console.log(finalPassword)

    }

    return finalPassword

    // 

}
// 1. get user preferences
// 2. Identify and collect bucket(s) user chose.
// 3. Create a guaranteed collection

