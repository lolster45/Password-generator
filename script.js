const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// password length is 15 characters



function retrievePasswords (object, characters, passOne, passTwo) {
    console.log('retrive function activated...')
    passOne.textContent = generatePassword(object.passwordLength, characters);
    passTwo.textContent = generatePassword(object.passwordLength, characters);
}

function generatePassword(length, characters) {
    return Array.from({length}, () => 
        characters[Math.floor(Math.random() * characters.length)]
    ).join('');
}

function copyIntoClipBoard (e) {
    if (e.target.textContent.trim().length) {
        navigator.clipboard.writeText(e.target.textContent);
        alert("Copied to Clipboard!!")
    }
}

function updateDisplay(displayLength, object) {
    displayLength.textContent = String(object.passwordLength); 
}

function changePassWordLength(e, object, displayLength) {
    const action = e.target.dataset.action;

    if(action === 'increase' && object.passwordLength < 35) {
        object.passwordLength += 1
    }
    if(action === 'decrease' && object.passwordLength > 0) {
        object.passwordLength -= 1
    }

    updateDisplay(displayLength, object);
}


function Init() {
    //Variables...
    let passOne = document.getElementById("pass-one-display");
    let clipBoardOne = document.getElementById('password-one');
    
    let passTwo = document.getElementById("pass-two-display");
    let clipBoardTwo = document.getElementById('password-two');
    
    let genBtn = document.getElementById("generate-btn");
    
    let increaseBtn = document.getElementById('increase');
    let decreaseBtn = document.getElementById('decrease');
    
    let displayLength = document.getElementById('length-display');

    let object = {
        passwordLength: 15
    };

    updateDisplay(displayLength, object);


    genBtn.addEventListener("click", () => {
        retrievePasswords(object, characters, passOne, passTwo)
    });
    clipBoardOne.addEventListener("click", copyIntoClipBoard);
    clipBoardTwo.addEventListener("click", copyIntoClipBoard);
    increaseBtn.addEventListener("click", (e) => {
        changePassWordLength(e, object, displayLength)
    });
    decreaseBtn.addEventListener("click", (e) => {
        changePassWordLength(e, object, displayLength)
    });

};


document.addEventListener('DOMContentLoaded', Init)



module.exports = {generatePassword, changePassWordLength, updateDisplay, changePassWordLength}