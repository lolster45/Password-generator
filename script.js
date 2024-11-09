const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// password length is 15 characters

//Variables...
let passOne = document.getElementById("pass-one-display");
let clipBoardOne = document.getElementById('password-one');

let passTwo = document.getElementById("pass-two-display");
let clipBoardTwo = document.getElementById('password-two');

let genBtn = document.getElementById("generate-btn");

let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');

let displayLength = document.getElementById('length-display');
let passwordLength = 15;

//Displaying the length of the password on the DOM...
displayLength.textContent = passwordLength;


genBtn.addEventListener("click", retrievePasswords);

clipBoardOne.addEventListener("click", copyIntoClipBoard);

clipBoardTwo.addEventListener("click", copyIntoClipBoard);

increaseBtn.addEventListener("click", change)
decreaseBtn.addEventListener("click", change)

function retrievePasswords () {
    passOne.textContent = generatePassword();
    passTwo.textContent = generatePassword();
}

function generatePassword() {
    let passOneArray = []
    for (let i = 0; i < passwordLength; i++) {
        passOneArray.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    return passOneArray.join("");
}

function copyIntoClipBoard (e) {
    if (e.target.textContent.trim().length) {
        navigator.clipboard.writeText(e.target.textContent);
        alert("Copied to Clipboard!!")
    }
}

function change(e) {
    const val = e.target.textContent;
    if(val === '+') {
        displayLength.textContent = passwordLength += 1
    }
    if(val === '-') {
        displayLength.textContent = passwordLength -= 1
    }
}