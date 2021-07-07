// Generator function - https://net-comber.com/charset.html

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 } 

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  } 
 
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  } 

function getRandomSymbol(){
  var symbols = '~`! @#$%^&*()_-+={[}]|\:;"<,>.?/';
  return symbols[Math.floor(Math.random() * symbols.length)];
  } 
  var promptCriteria = window.prompt("Which Criteria to include in the password ?");
  if (promptCriteria === "Random"){
      window.alert("Welcome to password Challenge" );
  } else {
      window.alert("Please select the length of the password in next screen" );
  } 
  var promptPassword = parseInt(window.prompt("Please select the length of the Password"));
if (promptPassword <8){
    window.alert("Minimum Password Length is: 8 character" );
}else if (promptPassword >128) {
    window.alert("Maximum Password Length is: 128 character" );
} else {
    window.alert("Please select password character types" );
}

var upperCase=window.confirm("Do you want upper case characters");
var lowerCase=window.confirm("Do you want lower case characters");
var number1=window.confirm("Do you want numbers characters");
var symbols1=window.confirm("Do you want symbols characters");

/*
if (promptCriteria === "OK" || promptCriteria === "ok" || promptCriteria === "Ok"){
    window.alert("Please generate the password" );
} else {
    window.alert("You are not eligible to see the password" );
}
*/
//DOM Elements

var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var upperCaseEl = document.getElementById('upperCase');
var lowerCaseEl = document.getElementById('lowerCase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipBoardEl = document.getElementById('clipBoard');

// Add event listener to generate button
var randomFunc = {
  lower : getRandomLower,
  upper : getRandomUpper,
  number : getRandomNumber,
  symbol : getRandomSymbol
};
generateEl.addEventListener("click", writePassword);
// Generate Password function
function generatePassword(lower, upper, number, symbol, length){
  var generatedPassword = '';
  var typesArray = [];
  if (upperCase){
    typesArray.push({upper})
  }
  if (lowerCase){
    typesArray.push({lower})
  }
  if (number1){
    typesArray.push({number})
  }
  if (symbols1){
    typesArray.push({symbol})
  }
  console.log(typesArray);
  
  //console.log('typeArray: ', typesArray);

  console.log(promptPassword);
  for (var length=0; length<promptPassword; length++){
    //console.log(length);
 
      var type = typesArray[Math.floor(Math.random() * typesArray.length)];
      var funcName = Object.keys(type)[0];
      console.log(funcName);
      generatedPassword += randomFunc[funcName]();
    
  }
  var finalPassword = generatedPassword;
  return finalPassword;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;







}