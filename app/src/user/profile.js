
import React, {useEffect,useState}  from "react";
import { Header } from "../components/header";
import { ListBox } from "../components/listBox";
import { getAllBooks } from "../book-data-service";

export function Profile(){

    const [Books,setBooks]=useState([]);

    useEffect(()=>{
        getAllBooks((result) => {
            if(result.status==='success'){
                let book=result.data;
                book=book.filter((b)=>{
                    if(b.metaData.username===localStorage.getItem('username')){
                        return b;
                    }
                })
                setBooks(book)
            }
        }, (err) => {
        })
    },[]);

    const button=()=>{

    }


    return(
        <>
         <div className="m-lg-3 m-md-2 m-0">
                <div className="row">
                    <Header title="Library Books" isUser={true} />
                </div>
                <hr/>
                <div className="row d-flex">
                <div className="col-10 h4">Book Borrowed by you</div>
                <div className="col-2"><a href="/user" className="btn btn-warning btn-lg" >Back</a></div>
                </div>
                <ListBox isAdmin={false} Books={Books} callback={(book) => button(book)} metaData={true} />
            </div>
        </>
    )
}