const myObj = {
    bookName: '"Harry Potter and the Philosopher\'s Stone"',
    authorName: 'J.K.Rowling',
    publishingYear: 1997,
    genre: 'Fantasy',
    language: 'English',
}

function objSwapped(obj){
    const myObjSwapped = {};
    for (const key in obj) {
        myObjSwapped[obj[key]] = key;
    }
    return myObjSwapped;
}

const myObjSwapped = objSwapped(myObj);
console.log(myObj);
console.log(myObjSwapped);