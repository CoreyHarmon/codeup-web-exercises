'use strict'

/*fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => console.log(books))
    .catch(error => console.error(error));*/


// fetch('http://localhost:3000/books/1')
//     .then(response => response.json())
//     .then(book => {
//         // do something with the `book` data
//         console.log(book);
//     })
//     .catch(error => console.error(error));

/*fetch('http://localhost:3000/books/1')
    .then(response => response.json())
    .then(book => {
        // A second fetch request to get the author data
        fetch(`http://localhost:3000/authors/${book.authorId}`)
            .then(response => response.json())
            .then(author => {
                // Log the book and author data to the console
                console.log(book);
                console.log(author);
                // OR we could simply add the author into the book object
                book.author = author;
                console.log(book);
            })
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));*/


/*const getBookAndAuthor = async (id) => {
    try {
        // Get the book data
        const bookUrl = `http://localhost:3000/books/${id}`;
        const bookResponse = await fetch(bookUrl);
        const book = await bookResponse.json();
        // Get the author data
        const authorUrl = `http://localhost:3000/authors/${book.authorId}`;
        const authorResponse = await fetch(authorUrl);
        const author = await authorResponse.json();
        // Add the author to the book object
        book.author = author;
        // Return the book object
        return book;
    } catch (error) {
        console.error(error);
    }
}
getBookAndAuthor(1)
    .then(book => console.log(book))
    .catch(error => console.error(error));*/


/*const getBookAndAuthor = async (id) => {
    try {
        // Get the book data
        const bookUrl = `http://localhost:3000/books/${id}`;
        const bookResponse = await fetch(bookUrl);
        const book = await bookResponse.json();
        // Get the author data
        const authorUrl = `http://localhost:3000/authors/${book.authorId}`;
        const authorResponse = await fetch(authorUrl);
        const author = await authorResponse.json();
        // Add the author to the book object
        book.author = author;
        // Return the book object
        return book;
    } catch (error) {
        console.error(error);
    }
}*/

/*    import {getBookAndAuthor} from "./books-api.js";
// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread
    const book = await getBookAndAuthor(1);
    console.log(book);
})();

import { getBookAndAuthor, getAllBooksAndAuthors } from './books-api.js';

// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread

    // const book = await getBookAndAuthor(1);
    // console.log(book);

    const books = await getAllBooksAndAuthors();
    console.log(books);

})();*/
