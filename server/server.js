
const express=require('express');
const server=express();





server.get('/',(request,response)=>{
    response.send("hello from server");
})

server.get('/getBooks',(request,response)=>{

})

server.listen(3030);