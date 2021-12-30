import React, { useState } from "react";
import { getAllBooks, borrowBook, deleteBook, updateBook } from "../book-data-service";
import { ListBox } from "../components/listBox";
import { ModalBox } from "../components/modalBox";

export function Admin() {

    const [book,setBook]=useState({})
    const [modal,callModal]=useState(false);
    let b = getAllBooks();
    let Books=b.data;
    
    const button = (book) => {
        setBook(book);
        callModal(true)
    }   

    const delBook=(book) => {
        callModal(false);  
        let result=deleteBook(book)
        console.log(Books,"form page")
    }
    const upBook=(book1,newTitle,newAuthor,newPrice)=>{
        updateBook(book1,newTitle,newAuthor,newPrice);
    }

    return (
        <>
            <div className="container m-lg-3 m-md-2 m-0">
                {modal && <ModalBox isAdmin={true} title='Delete' book={book} success={(book)=>delBook(book)} cancle={()=>callModal(false)} />}
                <h1>Library Books List
                </h1>
                <ListBox isAdmin={true} Books={Books} callback={(book) => button(book)} updateBook={(book1,newTitle,newAuthor,newPrice)=>upBook(book1,newTitle,newAuthor,newPrice)} />
            </div>
        </>
    );
}
