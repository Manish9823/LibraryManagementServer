import React from 'react';
import './component.css'


export function Card({ book, index, callback, metaData }) {
    let bool = false;
    if (book.Avaliability != 'Available') {
        bool = true;
    }
    return (
        <div className="col-lg-3 col-md-2 col-sm-4">
            <div className="card mt-3 book-card">
                <div className='row d-flex'>
                    <div className='col-5'>
                        <img className="card-img-top" src={book.img} width='20' alt="not found" />
                    </div>
                    <div className="card-body col-7">
                        <h5 className="card-title"><b>{book.title}</b></h5>
                        <p className="card-text small">Author:- {book.author} <br/>
                        <span>Price:-<b> {book.price} $ </b> </span></p>

                    </div>
                </div>
                <div className="card-footer">
                    {!bool &&
                        <>
                            <span className="text text-success">{book.Avaliability}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><input className="btn btn-warning" type="button" value="Borrow" onClick={() => callback(book)} /></span>
                        </>}
                    {bool && !metaData &&
                        <>
                            <span className="text text-danger">{book.Avaliability}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><input disabled className="btn btn-dark" type="button" value="Borrow" /></span>
                        </>}

                    {bool && metaData &&
                        <>
                            <p className='card-text'>Borrowed Cost:- {book.metaData.cost}$</p>
                            <p className='card-text'>Borrowed Date:- {book.metaData.borrowDate}</p>
                            <p className='card-text'>Borrowed Period:- {book.metaData.days} days</p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}