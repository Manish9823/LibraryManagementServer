import React from "react";
import { getAllBooks, borrowBook } from "../book-data-service";
import { ListBox } from "../components/listBox";
import { ModalBox } from "../components/modalBox";

export function Admin() {

    let Books = getAllBooks();

    const borrowBook = (book) => {
        console.log(book);
    }
    const updateBook=(newTitle,newAuthor,newPrice)=>{
        
    }

    return (
        <>
            <div className="container m-lg-3 m-md-2 m-0">
                {/* <ModalBox /> */}
                <h1>Library Books List
                </h1>
                <ListBox isAdmin={true} Books={Books} callback={(book) => borrowBook(book)} updateBook={(newTitle,newAuthor,newPrice)=>updateBook(newTitle,newAuthor,newPrice)} />
            </div>
        </>
    );
}
