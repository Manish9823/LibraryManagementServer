import React from "react";
import { Card } from "./card";
import { TR } from './TR'


export function ListBox({ isAdmin, Books, callback,updateBook }) {
    return (
        <>
            {!isAdmin && <div className="row p-lg-3 p-md-3 p-0 pt-5">

                <>
                    {Books.map((book1, index) =>
                        (<Card book={book1} index={index} callback={(book) => callback(book)} />)
                    )}
                </>
            </div>
            }
            {isAdmin && <div className="row p-lg-3 p-md-3 p-0 pt-5" >
                <div className="col-8">
                    <table className="table border border-dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Books.map((book1, index) =>
                                (<TR book={book1} index={index} deleteBook={(book) => callback(book)} updateBook={(book,newTitle,newAuthor,newPrice)=>updateBook(book,newTitle,newAuthor,newPrice)} />)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </>
    )
}