let gradeInNum = Number(window.prompt('What is your grade?'));

function gradeAssigner(gradeInNum) {
    if ((gradeInNum >= 0) && (gradeInNum <= 64)) {
        return 'F';
    } 
    else if ((gradeInNum >= 65) && (gradeInNum <= 69)) {
        return 'D';
    }
    else if ((gradeInNum >= 70) && (gradeInNum <= 79)) {
        return 'C';
    }
    else if ((gradeInNum >= 80) && (gradeInNum <= 89)) {
        return 'B';
    }
    else if ((gradeInNum >= 90) && (gradeInNum <= 100)) {
        return 'A';
    }
    else {
        return "Not a valid grade.";
    }
    
}

let gradeInLetter = gradeAssigner(gradeInNum);
console.log(gradeInLetter);