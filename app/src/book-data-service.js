import { useState } from "react";
const url='http://localhost:3030';


export async function getAllBooks(success,failure) {

    
   
    // console.log(temp)




    const xhr=new XMLHttpRequest();
    xhr.open('GET',`${url}/getBooks`,true);
    xhr.onload=()=>{
        if(xhr.status===200){
            let json=JSON.parse(xhr.responseText);
            success({status:"success",data:json});
        }
        else{
            failure("error from server.......")
        }
    }
    xhr.onerror=(err)=>{
        failure(err)
    }
    xhr.ontimeout=(err)=>{
        failure(err);
    }
    xhr.send();
}

export async function borrowBook(book, metaData,success,failure) {
    const xhr=new XMLHttpRequest();
    xhr.open('POST',`${url}/borrowBook`,true);     
    xhr.setRequestHeader('Content-type','application/json');
    xhr.onload=()=>{
        if(xhr.status===200){
           success(JSON.parse(xhr.responseText))
        }
        else{
            failure("error from server.......")
        }
    }
    xhr.onerror=(err)=>{
        failure(err)
    }
    xhr.ontimeout=(err)=>{
        failure(err);
    }
    let borrowBook={book:book,metaData:metaData};
    let data=JSON.stringify(borrowBook);
    xhr.send(data);
}

export async function addBook(title, author, price,success,failure) {
    const xhr=new XMLHttpRequest();
    xhr.open('POST',`${url}/addBook`,true);     
    xhr.setRequestHeader('Content-type','application/json');
    xhr.onload=()=>{
        if(xhr.status===200){
           success(JSON.parse(xhr.responseText))
        }
        else{
            failure("error from server.......")
        }
    }
    xhr.onerror=(err)=>{
        failure(err)
    }
    xhr.ontimeout=(err)=>{
        failure(err);
    }
    let newBook={title:title,author:author,price:price};
    let data=JSON.stringify(newBook);
    xhr.send(data);
}


export async function deleteBook(book,success,failure) {
    const xhr=new XMLHttpRequest();
    xhr.open('POST',`${url}/deleteBook`,true);     
    xhr.setRequestHeader('Content-type','application/json');
    xhr.onload=()=>{
        if(xhr.status===200){
           success(JSON.parse(xhr.responseText))
        }
        else{
            failure("error from server.......")
        }
    }
    xhr.onerror=(err)=>{
        failure(err)
    }
    xhr.ontimeout=(err)=>{
        failure(err);
    }
    let data=JSON.stringify(book);
    xhr.send(data);
}

export async function updateBook( book, newTitle, newAuthor, newPrice,success,failure ) {
    const xhr=new XMLHttpRequest();
    xhr.open('POST',`${url}/updateBook`,true);     
    xhr.setRequestHeader('Content-type','application/json');
    xhr.onload=()=>{
        if(xhr.status===200){
           success(JSON.parse(xhr.responseText))
        }
        else{
            failure("error from server.......")
        }
    }
    xhr.onerror=(err)=>{
        failure(err)
    }
    xhr.ontimeout=(err)=>{
        failure(err);
    }
    let updateBook={book:book,title:newTitle,author:newAuthor,price:newPrice};
    let data=JSON.stringify(updateBook);
    xhr.send(data);
}