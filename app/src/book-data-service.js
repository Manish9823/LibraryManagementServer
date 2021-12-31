import { useState } from "react";

let Books = [
    { title: 'T1', author: 'A1', price: 2000, Avaliability: 'Available', metaData: {} },
    { title: 'T2', author: 'A2', price: 3000, Avaliability: 'Available', metaData: {} },
    {title: 'T3', author: 'A3', price: 1000, Avaliability: 'Unavailable', metaData: {days: 12,cost: 50,borrowDate: '2021-12-25',username: 'user'}},
    { title: 'T4', author: 'A4', price: 2000, Avaliability: 'Available', metaData: {} },
    { title: 'T5', author: 'A5', price: 4000, Avaliability: 'Available', metaData: {} },
    { title: 'T6', author: 'A6', price: 5000, Avaliability: 'Available', metaData: {} },
]


export function getAllBooks() {
    return { status: "success", data: Books };
}



export function borrowBook(book, metaData) {
    Books = Books.map((b) => {
        if (b === book) {
            return { ...book, Avaliability: 'Unavailable', metaData: metaData };
        }
        return b;
    })
    console.log(Books, "from data server")
    return { status: "success", msg: 'Borrowed book successfully' }
}

export function addBook(title, author, price) {
    let newBook=[{ title: title, author: author, price: Number(price), Avaliability: 'Available', metaData: {} }]
    Books=Books.concat(newBook);
    return { status: "success", msg: 'Data added' }
}

export function deleteBook(book) {
    Books = Books.filter((b) => {
        if (b !== book) {
            return b;
        }
    })
    console.log(Books, "from data server")
    return { status: "success", msg: 'Book deleted' }
}

export function updateBook( book, newTitle, newAuthor, newPrice ) {
    console.log(book);
    Books = Books.map((b) => {
        if (b === book) {
            console.log('got')
            return { title: newTitle, author: newAuthor, price: newPrice, Avaliability: 'Available', metaData: {} };
        }
        console.log('not got')
        return b;
    })
    console.log(Books,"data from server")
    return { status: "success", msg: "book updated" }
}