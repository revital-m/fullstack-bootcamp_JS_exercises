let password = window.prompt('Choose a password');

(function passwordValid1(password){
    let res1;
    if (password.length > 7) {
        res1 = 'Strong';
    }
    else {
        res1 = 'Weak';
    }
    console.log(`res1 = ${res1}`);
    return res1;
})(password);

(function passwordValid2(password){
    let res2 = password.length > 7 ? 'Strong' : 'Weak';
    console.log(`res2 = ${res2}`);
    return res2;
})(password);

(function passwordValid3(password){
    let res3;
    if (password.length > 7){
        res3 = isContainUpCase(password) ? 'Very Strong' : 'Strong';
    }
    else {
        res3 = 'Weak';
    }
    
    console.log(`res3 = ${res3}`);
    return res3;
})(password);

function isContainUpCase(str){
    let isUp = false;
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])){
            isUp = true;
            return isUp;
        }
    }
    return isUp;
}