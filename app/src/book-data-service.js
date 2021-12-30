
let Books = [
    { title: 'T1', author: 'A1', price: 2000, Avaliability: 'Available' ,metaData:{}},
    { title: 'T2', author: 'A2', price: 3000, Avaliability: 'Available' ,metaData:{}},
    { title: 'T3', author: 'A3', price: 1000, Avaliability: 'Unavailable' ,metaData:{}},
    { title: 'T4', author: 'A4', price: 2000, Avaliability: 'Available' ,metaData:{}},
    { title: 'T5', author: 'A5', price: 4000, Avaliability: 'Available' ,metaData:{}},
    { title: 'T6', author: 'A6', price: 5000, Avaliability: 'Available' ,metaData:{}},
]


export function getAllBooks() {
    return { status: "success", data: Books };
}



export function borrowBook(book,metaData){
    Books = Books.map((b) => {
        if (b === book) {
            return {...book, Avaliability: 'Unvailable',metaData:metaData };
        }
        return b;
    })
    return { status:"success", msg:'Borrowed book successfully'}
}

export function addBook({ title, author, price }) {
    Books.push({ title: this.title, author: this.author, price: this.price, Avaliability: 'Available' ,metaData:''});
    return { status: "success", msg: 'Data added' }
}

export function updateBook({ book, newTitle, newAuthor, newPrice, newAvaliability='Available', newMetaData='' }) {
    Books = Books.map((b) => {
        if (b === book) {
            return { title: newTitle, author: newAuthor, price: newPrice, Avaliability: newAvaliability,metaData:newMetaData };
        }
    })
    return {status:"success", msg:"book updated"}
}