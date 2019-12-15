//Prompt Elements

var plength = prompt("How many characters would you like your password to be?")

if (plength < 8 || plength > 128){
    alert("Length must be 8-128 characters")
}

if (plength >= 8 && plength <= 128){
var cuppercase = confirm("Would you like to use uppercase letters?")
var clowercase = confirm("Would you like to use lowercase letters?")
var cnumbers = confirm("would you like to use numbers?")
var csymbols = confirm("would you like to use special characters?")
}    

if (cuppercase != true && clowercase != true && cnumbers != true && csymbols != true){
    alert("You must select at least one character type!")
}

//DOM elements
const resultEl = document.getElementById('password');




document.getElementById('generate').addEventListener('click', () => {	
    const length = +plength;
    const hasLower = clowercase = true;
	const hasUpper = cuppercase = true;
	const hasNumber = cnumbers = true;
	const hasSymbol = csymbols = true;
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

document.getElementById('clipboard').addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});


function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

 	// create a loop
     for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

// Generator functions

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}   
