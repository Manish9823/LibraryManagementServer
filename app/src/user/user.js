import React, {useState,useEffect} from "react";
import { getAllBooks, borrowBook } from "../book-data-service";
import { Header } from "../components/header";
import { ListBox } from "../components/listBox";
import { ModalBox } from "../components/modalBox";

export function User() {
    const [book,setBook]=useState({})
    const [Books,setBooks]=useState([]);
    const [modal,callModal]=useState(false);


    useEffect(()=>{
        getAllBooks((result) => {
            if(result.status==='success'){
                setBooks(result.data);
            }
        }, (err) => {
        })
    },[]);
    
    const button = (book) => {
        setBook(book);
        callModal(true)
    }

    const DoBorrowBook=(days,cost,borrowDate)=>{
        callModal(false);
        let metaData={
            days:days,
            cost:cost,
            borrowDate:borrowDate,
            username:localStorage.getItem('username')
        }
        borrowBook(book,metaData,(result)=>{
            console.log(result,'result');
            setBooks(result);
        },(err)=>{
            console.log(err);
        });            
    }

    return (
        <>
            <div className="m-lg-3 m-md-2 m-0">
               { modal && <ModalBox isAdmin={false} title='Borrow And Pricing' book={book} success={(days,cost,borrowDate)=>DoBorrowBook(days,cost,borrowDate)} cancle={()=>callModal(false)} /> }
                <div className="row">
                    <Header title="Library Book List" isUser={true} />
                </div>
                <hr/>
                <ListBox isAdmin={false} Books={Books} callback={(book) => button(book)} />
            </div>
        </>
    );
}
