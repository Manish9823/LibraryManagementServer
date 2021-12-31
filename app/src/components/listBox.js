import React, { useEffect, useState } from "react";
import { Card } from "./card";
import { TR } from './TR'


export function ListBox({available, isAdmin, Books, callback,updateBook }) {

    let Book=Books;
    let index=0;


    return (
        <>
            {!isAdmin && <div className="row p-lg-3 p-md-3 p-0 pt-5">

                <>
                    {Book.map((book1, index) =>
                        (<Card book={book1} index={index} callback={(book) => callback(book)} />)
                    )}
                </>
            </div>
            }
            {isAdmin && <div className="row" >
                <div className="col-11">
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
                            {available && Book.map((book1) =>
                                {
                                    if(book1.Avaliability==='Available'){
                                        return (<TR book={book1} index={index++} deleteBook={(book) => callback(book)} updateBook={(book,newTitle,newAuthor,newPrice)=>updateBook(book,newTitle,newAuthor,newPrice)} />)
                                    }
                                }  
                            )}
                            {!available && Book.map((book1) =>
                                {
                                    if(book1.Avaliability!=='Available'){
                                        return (<TR book={book1} index={index++} deleteBook={(book) => callback(book)} updateBook={(book,newTitle,newAuthor,newPrice)=>updateBook(book,newTitle,newAuthor,newPrice)} />)
                                    }
                                }  
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
            }
        </>
    )
}