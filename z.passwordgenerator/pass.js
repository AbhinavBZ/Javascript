//Random Password Generator

function generatepassword(length, includeLowercase, includeUppercase, includeNumbers,includesymbols){
    const lowercase="qwertyuiopasdfghjklzxcvbnm";
    const uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
    const number="0123456789";
    const symbols="!@#$%&*-_./\+,?~";

    let allowedchars = "";
    let password = "";

    allowedchars += includeLowercase ? lowercase : "";
    allowedchars += includeUppercase ? uppercase : "";
    allowedchars += includeNumbers ? number : "";
    allowedchars += includesymbols ? symbols : "";
    
    if(length<=0){
        return `(Password length must be at least 1)`;
    }
    if(allowedchars.length === 0){
        return `(Atleast one set of characters needs to be choosen)`;
    }
    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()* allowedchars.length);
        password += allowedchars[randomindex];
    }


    return password;
}

const passlength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includesymbols=true;

const password=generatepassword(passlength, 
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers,
                                includesymbols);

console.log(`Generated password : ${password}`);
