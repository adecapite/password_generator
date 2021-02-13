Anthony DeCapite's Password Generator 

Deployed application can be found here:  https://adecapite.github.io/password_generator/

Clicking the red "generate" button will begin the prompts asking how many characters you'd like your password to be.
This input can only be numerical between 8-128.

Next it will ask if you need capitals, lowercase, numbers or symbols. The "Ok" button will be registered as a "Yes", while the "Cancel" button registers as "No."

For each of those variables I used switch cases to help reduce the amount of writing that had to be done, instead of using if/when statements.

Next, the function at the bottom of the script runs a randomizer that takes the length of the password needed, and includes all the choices that were previously made.

It then writes the password by joining all of the choices from the various arrays to complete.
