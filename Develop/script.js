// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  if(generateBtn = true){
    var length = window.prompt("How many characters would you like? (8-128 Character)")
  }

  if(length < 8 || length > 128)
  {
    length = window.prompt("Password must be between 8-128 characters.")
  }
// Asks user if they want special characters.
  var SpecialCharacters = window.prompt("Do you want special characters? Y/N")

  if(SpecialCharacters.toUpperCase === "Y" || SpecialCharacters.toUpperCase === "N")
  {
      if(SpecialCharacters.toUpperCase === "Y")
      {
        SpecialCharacters = true;
  }else
  {
    SpecialCharacters = false;

  }
}

{
  SpecialCharacters = window.prompt ("Please use only captial Y and N for your response.")
}
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
