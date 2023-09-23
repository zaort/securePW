// Assignment Code
// What's the action from the code below? What needs to be changed?
var generateBtn = document.querySelector("#generate");
// Arrays that will feed the random password
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
var uppercaseletters = ["E", "Z", "M", "L", "H", "R", "A"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "&"]
var chosencharachters = []

function generatePassword() {
  // Ask user for thier prefered password length
  var passlengthChoice = window.prompt("Enter a password length from 8 to 128 charachters:");
  // If user pressed Cancel, immediately end function
  if (!passlengthChoice) {
    return;
  }
  // If user selected length is less than 8 or greater than 128, alert message with the instructions and show window prompt again with the first question
  if (passlengthChoice < 8 || passlengthChoice > 128) {
    window.alert("Password length should be between 8 and 128 charachters, please input you selected value again.");
    return generatePassword();
    // If the input type is different than a int, present alert message with intructions and show window prompt again with the first question
  } else if (!parseInt(passlengthChoice)) {
    window.alert("Password length should a number value, please enter a valid input");
    return generatePassword();
  }

  // Ask user for lowercase usage in passowrd
  var lowercaseChoice = window.confirm("Do you want lowercase in you password: (OK = Yes | Cancel = No)");
  if (lowercaseChoice) {
    chosencharachters = chosencharachters.concat(letters);
  }

  // Ask user for uppercase usage in password
  var uppercaseChoice = window.confirm("Do you want uppercase in you password: (OK = Yes | Cancel = No)");
  if (uppercaseChoice) {
    chosencharachters = chosencharachters.concat(uppercaseletters);
  }

  // Ask for numeric characters in password
  var numericChoice = window.confirm("Do you want numeric characters in you password: (OK = Yes | Cancel = No)");
  if (numericChoice) {
    chosencharachters = chosencharachters.concat(numbers);
  }

  // Ask for special charachters in password
  var specialcharChoice = window.confirm("Do you want special characters in you password: (OK = Yes | Cancel = No)");
  if (specialcharChoice) {
    chosencharachters = chosencharachters.concat(symbols);
  }

  // If all answeres are false from the user then password can't be generated
  if (!lowercaseChoice && !uppercaseChoice && !numericChoice && !specialcharChoice) {
    window.alert("Your password should at least have one of the 4 mentioned charachters");
    return generatePassword();
  }


  var securePW = "";
  // While function will rendomly add the selected type of charachters until the user's selected password length is accurate.
  while (securePW.length < passlengthChoice) {
    var index = Math.floor(Math.random() * chosencharachters.length);
    securePW += chosencharachters[index]; // add array elements from selected preferences

  }

  return securePW;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


