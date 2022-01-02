import React, { useState } from "react";
import { ModalBox } from "./modalBox";


export function TR({book, index, deleteBook,updateBook}) {

    let bool = false;
    if (book.Avaliability != 'Available') {
        bool = true;
    }

    const [update,setUpdate]=useState(false);
    const [newTitle,setTitle]=useState(book.title);
    const [newAuthor,setAuthor]=useState(book.author);
    const [newPrice,setPrice]=useState(book.title);
    const [showMore,setShowMore]=useState(false);


    const updateCall=()=>{
        setTitle(book.title);
        setAuthor(book.author);
        setPrice(book.price);
        setUpdate(true);
    }

    const updateBooks=()=>{
        updateBook(book,newTitle,newAuthor,newPrice)
        setUpdate(false);
    }

    
    return (
        <>
            <tr>    
                {!bool && !update &&
                    <>
                        <td>{index + 1}</td>
                        <td><input className="form-control p-0" type="text" value={book.title} disabled  /></td>
                        <td><input className="form-control p-0" type="text" value={book.author} disabled /></td>
                        <td><input className="form-control p-0" type="number" value={book.price} disabled  /></td>
                        <td className="text text-success">{book.Avaliability}</td>
                        <td><input className="btn btn-info btn-sm" type="button" value="Edit" onClick={() => updateCall()} /></td>
                        <td className="text text-center"> <input className="btn btn-danger btn-sm" type="button" value="Delete" onClick={() => deleteBook(book)} /></td>
                    </>}
                    {!bool && update &&
                    <>
                        <td>{index + 1}</td>
                        <td><input className="form-control p-0" type="text" value={newTitle} onChange={(e)=>setTitle(e.target.value)} /></td>
                        <td><input className="form-control p-0" type="text" value={newAuthor} onChange={(e)=>setAuthor(e.target.value)} /></td>
                        <td><input className="form-control p-0" type="number" value={newPrice} onChange={(e)=>setPrice(e.target.value)} /></td>
                        <td className="text text-success">{book.Avaliability}</td>
                        <td></td>
                        <td className="text text-center">
                            <input className="btn btn-success btn-sm" type="button" value="Update" onClick={() => updateBooks()} />
                        </td>
                    </>}
                {bool &&
                    <>
                        <td>{index + 1}</td>
                        <td>{newTitle}</td>
                        <td>{newAuthor} </td>
                        <td>{newPrice}  </td>

                        <td className="text text-danger">Borrowed</td>
                        <td><input className="btn btn-warning btn-sm" type="button" value="Show More" onClick={()=>setShowMore(true)} /></td>
                    </>}

                {   bool && showMore &&
                    <>
                    <ModalBox isAdmin={true} isShowMore={true} title='Borrowed Book Details' book={book} cancle={() => setShowMore(false)} />
                    </>
                }
            </tr>
        </>
    )
}