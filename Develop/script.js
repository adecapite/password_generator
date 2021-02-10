// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword(){
  if(generateBtn = true)
  {
    var length = window.prompt("How many characters would you like? (8-128 Character)")
    if(length < 8 || length > 128)
    {
      length = window.prompt("Password must be between 8-128 characters.")
    }
   // Asks user if they want special characters.
    var specialCharacters = window.prompt("Do you want special characters? Y/N")
    if(specialCharacters.toUpperCase === "Y" || specialCharacters.toUpperCase === "N")
    {
      if(specialCharacters.toUpperCase === "Y")
      {
        specialCharacters = true;
      }
      else
      {
        specialCharacters = false;
      }
    }else;
    

    var upperCase = window.prompt ("Do you need an uppercase letter? Y/N" )
      if(upperCase.toUpperCase === "Y" || specialCharacters.toUpperCase === "N")
    {
      if(upperCase.toUpperCase === "Y")
      {
        upperCase = true;
      }
      else
      {
        upperCase = false;
      }
    }else;
    

    var lowerCase = window.prompt ("Do you need lower case letters? Y/N" )
    if(upperCase.toUpperCase === "Y" || specialCharacters.toUpperCase === "N")
    {
      if(upperCase.toUpperCase === "Y")
      {
        upperCase = true;
      }
      else
      {
        upperCase = false;
      }
    }else;
    
  }

  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

