const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// password length is 15 characters

let passOne = document.getElementById("passwordOne")
let passTwo = document.getElementById("passwordTwo")
let genBtn = document.getElementById("generateBtn")



genBtn.addEventListener("click", activateGenerator);

function activateGenerator() {
    generatePasswordOne()
    generatePasswordTwo()
}


function generatePasswordOne() {
    let passOneArray = []
    
    for (let i = 0; i <=14; i++) {
        passOneArray.push(characters[Math.floor(Math.random() * characters.length)]);
        if (passOneArray.length >=15) {
            return passOneArray;
        }
        passOne.textContent = passOneArray.join("");
    }
}

function generatePasswordTwo() {
    
    let passTwoArray = []
    
    for (let i = 0; i <=14; i++) {
        passTwoArray.push(characters[Math.floor(Math.random() * characters.length)]);
        if (passTwoArray.length >=15) {
            return passTwoArray;
        }
        passTwo.textContent = passTwoArray.join("");
    }
}

passOne.addEventListener("click", clipboardOne)
passTwo.addEventListener("click", clipboardOne)

function clipboardOne (event) {
    if (event.target.textContent) {
        navigator.clipboard.writeText(event.target.textContent);
        alert("Copied to Clipboard!!")
    }
}



// JUST SOME OF MY OWN CODE BUT FOUND BETTER ALGORITHM.
// function clipboardOne() {
//     if (passOne.textContent) {
//         navigator.clipboard.writeText(passOne.textContent);
//         alert("Copied to Clipboard!!")
//     }
// }
// function clipboardTwo() {
//     if (passOne.textContent) {
//         navigator.clipboard.writeText(passOne.textContent);
//         alert("Copied to Clipboard!!")
//     }
// }