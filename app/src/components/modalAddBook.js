import React, { useState } from "react";


export function ModalAddBook({ title, success, cancle }) {

    if (document.readyState === "complete") {
        setTimeout(() => {
            let v = document.getElementById("call");
            v.click();
        }, 10)
    }

    const [newTitle,setTitle]=useState('');
    const [newAuthor,setAuthor]=useState('');
    const [newPrice,setPrice]=useState(0);


    return (
        <>
            <button style={{ position: 'absolute', left: '-1000px' }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id='call'>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" style={{ paddingRight: '0px' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => cancle()}></button>
                        </div>
                        <div className="modal-body">
                            <h4 className="text text-success">Enter Books Details</h4>
                            <div className="col-12 h5">
                                Title:- <input className="form-control" type="text" id="title" /> <br />
                                Author:- <input className="form-control" type="text" id='author'/> <br />
                                Price:- <input className="form-control" type="number" id='price' /><br />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cancle()}>Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => success(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('price').value)}>{title}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}