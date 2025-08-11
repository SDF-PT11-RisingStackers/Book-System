import Book from "./Book"
import "./BookList.css"
import BookForm from "./BookForm"
import { useState } from "react"
function BookList(){ 
    const [books,setBooks]=useState([
        {id:1, title:"Introduction to HTML",author:"Mark F."},
        {id:2, title:"Introduction to CSS",author:"Mary F."},
        {id:3, title:"Introduction to Javascript",author:"Alice F."},
        {id:4, title:"Introduction to React",author:"John F."}
    ])
    
    function addBook(newBook){
        const nextId=books.length+1;
        const bookWithId={id:nextId,...newBook}// spread operator copies all the properties from newBook(title and author)
        setBooks(...books,bookWithId)
    }
    return(
        <div className="book-list">
            <BookForm onAddBook={addBook}/>
            {books.map((book)=>(
                <Book key={book.id}
                title={book.title}
                author={book.author}/>
            ))}
        </div>
    )
}
export default BookList