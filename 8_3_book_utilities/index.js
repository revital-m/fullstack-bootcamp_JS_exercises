const bookOne = {
    name: '"The Hitchhiker\'s Guide to the Galaxy"',
    author: 'Douglas Adams',
    year: 1979,
}

const bookTwo = {
    name: '"Alice\'s Adventures in Wonderland"',
    author: 'Lewis Carroll',
    year: 1865,
}

const bookUtils = {
    getFirstPublished(bookOne, bookTwo){
        smallerYear = bookOne.year < bookTwo.year ? bookOne:bookTwo;
        return smallerYear;
    },

    setNewEdition(book, editionYear){
        book.latestEdition = editionYear;
        return book;
    },

    setLanguage(book, language){
        book.language = language;
        return book;
    },

    setTranslation(book, language, translator){
        book.translation = {
            language,
            translator,
        };
        return book;
    },

    setPublisher(book, name, location){
        book.publisher = {
            name,
            location,
        };
        return book;
    },

    isSamePublisher(bookOne, bookTwo){
        return  (bookOne.publisher.name === bookTwo.publisher.name && bookOne.publisher.location === bookTwo.publisher.location) ? true:false;
    },
}

console.log(bookUtils.getFirstPublished(bookOne, bookTwo));
console.log(bookUtils.setNewEdition(bookOne, 2000));
console.log(bookUtils.setNewEdition(bookOne, 2021));
console.log(bookUtils.setLanguage(bookOne, 'English'));
console.log(bookUtils.setLanguage(bookOne, 'Spanish'));
console.log(bookUtils.setTranslation(bookTwo, 'Spanish', 'John Doe'));
console.log(bookUtils.setPublisher(bookTwo, 'John Smith', 'USA'));
console.log(bookUtils.setPublisher(bookOne, 'John Doe', 'Israel'));
console.log(bookUtils.isSamePublisher(bookOne, bookTwo));
