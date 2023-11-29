// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Initialise object containing password options
  let passwordCriteria = {
    pass_length: 0,
    lowercase: false,
    uppercase: false,
    numbers: false,
    special_char: false,
  };
  // If password length is out of bounds keep running until user enters an inbounds number
  while(true){
    passwordCriteria.pass_length = prompt("How long do you want your password to be?");
    if (passwordCriteria.pass_length < 8 || passwordCriteria.pass_length > 128 ) {
      alert('Out of bounds! Please enter a password length between 8 and 128')
    }
    // Once user has entered an accepted password length exit the while loop
    else{
      break;
    }
  }
  // Set the rest of the password options given by the user
  passwordCriteria.lowercase = confirm("Would you like Lowercase characters in your password?")
  passwordCriteria.uppercase = confirm("Would you like Uppercase characters in your password?")
  passwordCriteria.numbers = confirm("Would you like numbers in your password?")
  passwordCriteria.special_char = confirm("Would you like special characters in your password?")
  
  return passwordCriteria;
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions()
  var all_char = []
  if (options.lowercase){
    all_char += lowerCasedCharacters
  }
  if (options.uppercase){
    all_char += upperCasedCharacters
  }
  if (options.numbers){
    all_char += numericCharacters
  }
  if (options.special_char){
    all_char += specialCharacters
  }
  
  let password = []
  while(password.length < options.pass_length){
    const char = all_char[Math.floor(Math.random()*all_char.length)];
    password.push(char)
  }

  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);