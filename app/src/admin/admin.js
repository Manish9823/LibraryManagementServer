import React, { useEffect, useState } from "react";
import { getAllBooks, borrowBook, deleteBook, updateBook, addBook } from "../book-data-service";
import { ListBox } from "../components/listBox";
import { ModalAddBook } from "../components/modalAddBook";
import { ModalBox } from "../components/modalBox";
import { Header } from "../components/header";

export function Admin() {
    const [book, setBook] = useState({})
    const [Books, setBooks] = useState([])
    const [modal, callModal] = useState(false);
    const [modalBook, callModalBook] = useState(false);



    useEffect(() => {
        getAllBooks((result) => {
            if (result.status === 'success') {
                setBooks(result.data);
            }
        }, (err) => {
            console.log(err);
        })
    }, []);



    const button = (book) => {
        callModal(true);
        setBook(book);
    }

    const delBook = (book) => {
        callModal(false);
        deleteBook(book, (books) => {
            setBooks(books);
        }, (err) => {
            console.log(err);
        })

    }
    const upBook = (book1, newTitle, newAuthor, newPrice) => {
        updateBook(book1, newTitle, newAuthor, newPrice, (result) => {
            console.log("ldjfkljsklj")
            setBooks(result);
        }, (err) => {
            console.log(err);
        });
    }
    const addNewBook = (newTitle, newAuthor, newPrice) => {
        callModalBook(false);
        addBook(newTitle, newAuthor, newPrice, (result) => {
            setBooks(result)
        }, (err) => {
            console.log(err);
        });
    }

    return (
        <>
            <div className="m-lg-3 m-mb-2 m-1 justify-content-center">
                {modal && <ModalBox isAdmin={true} title='Delete' book={book} success={(book) => delBook(book)} cancle={() => callModal(false)} />}
                <div className="row">
                    <Header title="Library Book List" isUser={false} />
                </div>
                <hr />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-md-6 col-12">


                        <div className="row d-flex justify-content-end">
                            <div className="col-lg-9 col-md-9 col-7">
                                <div className="h3 heading text text-success">Available Books</div>
                            </div>
                            <div className="col-lg-3 col-3 col-5">
                                <button className="btn btn-success" onClick={() => callModalBook(true)}>Add Book</button>
                                {modalBook && <ModalAddBook title='Add Book' success={(newTitle, newAuthor, newPrice) => addNewBook(newTitle, newAuthor, newPrice)} cancle={() => callModalBook(false)} />}
                            </div>
                        </div>


                        <ListBox available={true} isAdmin={true} Books={Books} callback={(book) => button(book)} updateBook={(book1, newTitle, newAuthor, newPrice) => upBook(book1, newTitle, newAuthor, newPrice)} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <h3 className="heading text text-danger">Borrowed Books</h3>
                        <ListBox available={false} isAdmin={true} isShowMore={false} Books={Books} callback={(book) => button(book)} updateBook={(book1, newTitle, newAuthor, newPrice) => upBook(book1, newTitle, newAuthor, newPrice)} />
                    </div>
                </div>
            </div>
        </>
    );
}
