const book = {
    bookName: '"Harry Potter and the Philosopher\'s Stone"',
    authorName: 'J.K.Rowling',
    publishingYear: 1997,
    genre: 'Fantasy',
    language: 'English'
}

function bookInfo(book){
    return `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}.`;
}

let myBookInfo = bookInfo(book);
console.log(myBookInfo);