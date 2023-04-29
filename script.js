const includeLetters = document.querySelector('.includeLetters');
const includeCapitals = document.querySelector('.includeCapitals');
const includeSpecialChars = document.querySelector('.includeSpecialChars');
const includeNumbers = document.querySelector('.includeNumbers');
const passwordLen = document.querySelector('.passwordLen');
const generateBtn = document.querySelector('.btn');
const passwordOutput = document.querySelector('.passwordOutput');
const copyBtn = document.querySelector('.copyBtn');

function generatePassword() {
    let passwdChars = '';
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numChars = '0123456789';
    let specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if(includeLetters.checked) passwdChars += lowerChars;
    if(includeCapitals.checked) passwdChars += upperChars;
    if(includeNumbers.checked) passwdChars += numChars;
    if(includeSpecialChars.checked) passwdChars += specialChars;

    let resultPasswd = '';
    for(let i = 0; i < passwordLen.value; i++){
        resultPasswd += passwdChars.charAt(Math.floor(Math.random() * passwdChars.length));
    }
    passwordOutput.value = resultPasswd;
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPasswd);

function copyPasswd(){
    passwordOutput.select();    
    navigator.clipboard.writeText(passwordOutput.value);
}