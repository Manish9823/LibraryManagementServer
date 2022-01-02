
const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());



let Books = [
    { id: 1, title: 'T1', author: 'A1', price: 2000, Avaliability: 'Available', metaData: {} },
    { id: 2, title: 'T2', author: 'A2', price: 3000, Avaliability: 'Available', metaData: {} },
    { id: 3, title: 'T3', author: 'A3', price: 1000, Avaliability: 'Unavailable', metaData: { days: 12, cost: 50, borrowDate: '2021-12-25', username: 'user' } },
    { id: 4, title: 'T4', author: 'A4', price: 2000, Avaliability: 'Available', metaData: {} },
    { id: 5, title: 'T5', author: 'A5', price: 4000, Avaliability: 'Available', metaData: {} },
    { id: 6, title: 'T6', author: 'A6', price: 5000, Avaliability: 'Available', metaData: {} },
];

let nextId = Books.length;




server.get('/', (request, response) => {
    response.send("hello from server");
})

server.get('/getBooks', (request, response) => {
    response.send(Books);
})

server.post('/deleteBook', (request, response) => {
    let data = request.body;
    Books = Books.filter((b) => {
        if (b.id !== data.id) {
            return b;
        }
    })
    response.send(Books);
})

server.post('/addBook', (request, response) => {
    let title = request.body.title;
    let author = request.body.author;
    let price = request.body.price;
    let newBook = [{ id: nextId++, title: title, author: author, price: Number(price), Avaliability: 'Available', metaData: {} }]
    Books = Books.concat(newBook);
    response.send(Books);
})

server.post('/updateBook', (request, response) => {
    let data = request.body.book;
    let title = request.body.title;
    let author = request.body.author;
    let price = request.body.price;
    Books = Books.map((b) => {
        if (b.id === data.id) {
            return { ...b, title: title, author: author, price: Number(price) }
        }
        return b;
    })
    response.send(Books);
})



//  For user at Borrow Time....


server.post('/borrowBook', (request, response) => {
    let data = request.body.book;
    let metaData = request.body.metaData;
    Books = Books.map((b) => {
        if (b.id === data.id) {
            return { ...data, Avaliability: 'Unavailable', metaData: metaData };
        }
        return b;
    })
    response.send(Books);
})











const Admin=[
    {
        username:'admin@gmail.com',
        password:'admin'
    }
]
const User=[
    {
        username:'user@gmail.com',
        password:'user'
    }
]

server.get('/login',(request,response)=>{
    let data=request.query;
    if(data.role==='user'){
        User.map((u)=>{
            if(u.username===data.username){
                if(u.password===data.password){
                    response.send({status:'success',msg:'Authentication Successfully'});
                }
                else{
                    response.send({status:'failed',msg:'Password not Match'});
                }
            }
            response.send({status:'failed',msg:'Authentication Failed'});
        })
    }
    else{
        Admin.map((u)=>{
            if(u.username===data.username){
                if(u.password===data.password){
                    response.send({status:'success',msg:'Authentication Successfully'});
                }
                else{
                    response.send({status:'failed',msg:'Password not Match'});
                }
            }
            response.send({status:'failed',msg:'Authentication Failed'});
        })
    }
    response.send({msg:'failed'})
})












server.listen(3030);