import React, { useEffect } from "react";
import { Calendar } from "./calendar";


export function ModalBox({isAdmin,title, book, success, cancle }) {

    if (document.readyState === "complete") {
        setTimeout(() => {
            let v = document.getElementById("call");
            v.click();
        }, 10)
    }

    return (
        <>
            <button style={{ position: 'absolute', left: '-1000px' }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id='call'>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => cancle()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-12 h6">
                                Title:- {book.title}<br/>
                                Author:- {book.author} <br />
                                Price:- {book.price}<br/>
                            </div>
                            <hr />
                          {!isAdmin &&  <Calendar bookPrice={book.price} success={(days,cost)=>success(days,cost)} cancle={()=>cancle()} />}

                        </div>
                        {isAdmin && <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cancle()}>Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{success(book)}}>{title}</button>
                        </div> }
                    </div>
                </div>
            </div>
        </>
    )
}