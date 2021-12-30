import React, { useState } from "react";
import { ModalBox } from "./modalBox";


export function TR({ book, index, deleteBook,updateBook}) {

    let bool = false;
    if (book.Avaliability != 'Available') {
        bool = true;
    }

    const [update,setUpdate]=useState(false);
    const [newTitle,setTitle]=useState(book.title);
    const [newAuthor,setAuthor]=useState(book.author);
    const [newPrice,setPrice]=useState(book.title);

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
                        <td><input className="form-control" type="text" value={newTitle} disabled onChange={(e)=>setTitle(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newAuthor} disabled onChange={(e)=>setAuthor(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newPrice} disabled onChange={(e)=>setPrice(e.target.value)} /></td>
                        <td className="text text-success">{book.Avaliability}</td>
                        <td><input className="btn btn-info btn-sm" type="button" value="Edit" onClick={() => setUpdate(true)} /></td>
                        <td className="text text-center"> <input className="btn btn-danger btn-sm" type="button" value="Delete" onClick={() => deleteBook(book)} /></td>
                    </>}
                    {!bool && update &&
                    <>
                        <td>{index + 1}</td>
                        <td><input className="form-control" type="text" value={newTitle} onChange={(e)=>setTitle(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newAuthor} onChange={(e)=>setAuthor(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newPrice} onChange={(e)=>setPrice(e.target.value)} /></td>
                        <td className="text text-success">{book.Avaliability}</td>
                        <td></td>
                        <td className="text text-center">
                            <input className="btn btn-success btn-sm" type="button" value="Update" onClick={() => updateBooks()} />
                        </td>
                    </>}
                {bool &&
                    <>
                        <td>{index + 1}</td>
                        <td><input className="form-control" type="text" value={newTitle} disabled onChange={(e)=>setTitle(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newAuthor} disabled onChange={(e)=>setAuthor(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newPrice} disabled onChange={(e)=>setPrice(e.target.value)} /></td>
                        <td className="text text-danger">Borrowed</td>
                        <td></td>
                        <td><input className="btn btn-warning btn-sm" type="button" value="Show More" /></td>
                    </>}
            </tr>
        </>
    )
}