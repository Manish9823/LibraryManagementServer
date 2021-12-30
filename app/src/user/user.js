import React, {useState} from "react";
import { getAllBooks, borrowBook } from "../book-data-service";
import { ListBox } from "../components/listBox";
import { ModalBox } from "../components/modalBox";

export function User() {
    const [book,setBook]=useState({})
    const [modal,callModal]=useState(false);
    let Books = getAllBooks();
    
    const button = (book) => {
        setBook(book);
        callModal(true)
    }

    const DoBorrowBook=(days,cost)=>{
        callModal(false);
        let metaData={
            days:days,
            cost:cost,
            username:localStorage.getItem('username')
        }
        let result=borrowBook(book,metaData);
    }

    return (
        <>
            <div className="container m-lg-3 m-md-2 m-0">
               { modal && <ModalBox book={book} success={(days,cost)=>DoBorrowBook(days,cost)} cancle={()=>callModal(false)} /> }
                <h1>Library Books List
                </h1>
                <ListBox isAdmin={false} Books={Books} callback={(book) => button(book)} />
            </div>
        </>
    );
}
