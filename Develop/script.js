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
    if(specialCharacters.toUpperCase === "Y" || pecialCharacters.toUpperCase === "N")
    {
      if(specialCharacters.toUpperCase === "Y")
      {
        specialCharacters = true;
      }
      else
      {
        specialCharacters = false;
      }
    }else
    {
      specialCharacters = window.prompt ("Please use only captial Y and N for your response.")
    }
  }

  var upperCase = window.prompt ("Do you need uppercase letters? Y/N" )
  if(upperCase.toUpperCase === "Y" || pecialCharacters.toUpperCase === "N")
  {
      if(upperCase.toUpperCase === "Y")
      {
        upperCase = true;
      }
      else
      {
        upperCase = false;
      }
    }else
    {
      upperCase = window.prompt ("Please use only captial Y and N for your response.")
    }
  }
    var lowerCase = window.prompt("Do you need a lower case letters? Y/N")
    if(upperCase.toUpperCase === "Y" || pecialCharacters.toUpperCase === "N")
  {
      if(lowerCase.toUpperCase === "Y")
      {
        lowerCase = true;
      }
      else
      {
        lowerCase = false;
      }
    }else
    {
      lowerCase = window.prompt ("Please use only captial Y and N for your response.")
    }
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

