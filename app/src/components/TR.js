import React, { useState } from "react";


export function TR({ book, index, callback ,updateBook}) {

    let bool = false;
    if (book.Avaliability != 'Available') {
        bool = true;
    }

    const [update,setUpdate]=useState(false);
    const [newTitle,setTitle]=useState(book.title);
    const [newAuthor,setAuthor]=useState(book.author);
    const [newPrice,setPrice]=useState(book.title);


    
    return (
        <>
            <tr>

                {!bool && !update &&
                    <>
                        <td>{index + 1}</td>
                        <td>{book.title} </td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td className="text text-success">{book.Avaliability}</td>
                        <td><input className="btn btn-info btn-sm m-2 mt-0" type="button" value="Edit" onClick={() => setUpdate(true)} /></td>
                        <td> <input className="btn btn-danger btn-sm m-2 mt-0" type="button" value="Delete" onClick={() => callback(book)} /></td>
                    </>}
                    {!bool && update &&
                    <>
                        <td>{index + 1}</td>
                        <td><input className="form-control" type="text" value={newTitle} onChange={(e)=>setTitle(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newAuthor} onChange={(e)=>setAuthor(e.target.value)} /></td>
                        <td><input className="form-control" type="text" value={newPrice} onChange={(e)=>setPrice(e.target.value)} /></td>
                        <td className="text text-success">{book.Avaliability}</td>
                        <td></td>
                        <td>
                            <input className="btn btn-success btn-sm m-2 mt-0" type="button" value="Update" onClick={() => updateBook(newTitle,newAuthor,newPrice)} />
                        </td>
                    </>}
                {bool &&
                    <>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td className="text text-danger">Borrowed</td>
                        <td></td>
                        <td><input className="btn btn-warning btn-sm" type="button" value="Show More" /></td>
                    </>}
            </tr>
        </>
    )
}