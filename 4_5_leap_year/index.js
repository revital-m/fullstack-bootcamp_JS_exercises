let chosenYear = Number(window.prompt('Choose a year'));

(function isLeapYear(chosenYear){
    if ((chosenYear%4)===0) {
        if (((chosenYear%100)===0) && ((chosenYear%400)!==0)) {
            console.log("This is not a leap year.");
        }
        else {
            console.log("It is indeed a leap year.");
        }
    }
    else {
        console.log("This is not a leap year.");
    }
})(chosenYear);

