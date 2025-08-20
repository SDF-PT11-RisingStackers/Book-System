import Book from "./Book"
import "./BookList.css"
import BookForm from "./BookForm"
import { useState,useEffect } from "react"


function BookList(){ 

    const [books,setBooks]=useState([])
    
    function addBook(newBook){
        const nextId=books.length+1;
        const bookWithId={id:nextId,...newBook}// spread operator copies all the properties from newBook(title and author)
        setBooks([...books,bookWithId])
    }
    useEffect(()=>{
        document.title=`Books:${books.length}`},[books])


    // useEffect(()=>{
    //     const savedBooks=localStorage.getItem("books")
    //     if (savedBooks){
    //         setBooks(JSON.parse(savedBooks))
    //     }
    // },[])// Loading effect 

    useEffect(()=>{
        localStorage.setItem("books",JSON.stringify(books))
    },[books])// Save in the local storage 
    
    useEffect(()=>{
        fetch("http://localhost:3000/books")
        .then((res)=>res.json())
        .then((data)=>setBooks(data))
        .catch((err)=>console.error("Error fetching books", err))
    },[])
    return(
        <div className="book-list">
            <BookForm onAddBook={addBook}/>
            {books.map((book)=>(
                <Book key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}/>
            ))}
        </div>
    )
}
export default BookList