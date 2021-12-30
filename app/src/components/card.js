import React from 'react';
import './component.css'


export function Card({book,index,callback}) {
    let bool = false;
    if (book.Avaliability != 'Available') {
        bool = true;
    }
    return(
    <div className="col-lg-3 col-md-2 col-sm-4">
        <div class="card mt-3 book-card">
            {/* <img className="card-img-top" src="holder.js/100px180/" alt="not found" /> */}
            <div class="card-body">
                <h4 class="card-title">{book.title}</h4>
                <p class="card-text">Author:- {book.author}</p>
                <p class="card-text">Price:- {book.price}</p>
            </div>
            <div className="card-footer">
            {!bool &&
                    <>
                        <span className="text text-success">{book.Avaliability}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span><input className="btn btn-warning" type="button" value="Borrow" onClick={() => callback(book)} /></span>
                    </>}
                {bool &&
                    <>
                        <span className="text text-danger">{book.Avaliability}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span><input disabled className="btn btn-dark" type="button" value="Borrow" /></span>
                    </>}
            </div>
        </div>
    </div>
    );
}