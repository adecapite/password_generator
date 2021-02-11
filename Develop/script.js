// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to thge #password input
function generatePassword() {
//Starts the generator
  if(generateBtn = true)
  {
    var pwlength = window.prompt("How many characters would you like? (8-128 Character)")
    
    //Catches if the password is shorter than 8 or longer than 128
    if(pwlength < 8 || pwlength > 128)
    {
      pwlength = window.prompt("Password must be between 8-128 characters.")
    }
    //Prompts if user needs special characters
    var specialCharacters = window.confirm("Do you want special characters?")
    //Asks if the user beeds uppercase letters
    var upperCase = window.confirm("Do you want upper case letters?")
    // Asks if user needs lower case letters
    var lowerCase = window.confirm("Do you want lower case letters?")
    // Asks if user needs numbers
    var number = window.confirm("Do you want numbers?")

    if(!(specialCharacters) && !(upperCase) && !(lowerCase) && !(number))
    {
      window.alert("You must choose atleast one option.")
    }else
    {
      var final = [];
      switch(specialCharacters)
      {
        case true:
          var characters = ["!","@","#","$","%","*"];
          final = final.concat(characters);
          break;
        case false:
          break;
      }
      switch (upperCase)
      {
        case true:
          var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          final = final.concat(lettersUppercase)
          break;
        case false:
          break;
        
      }
      switch(lowerCase)
      {
        case true:
          var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
          final = final.concat (lettersLowercase);
          break;
        case false:
          break;
      }
     
    }

    password = final.join("");



  
  
  
  }

  charset = password;
  retVal = "";
  for (var i = 0, n = charset.length; i < pwlength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

