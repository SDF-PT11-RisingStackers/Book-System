import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";

function BookDetail(){
    const {id}=useParams()
    const [book,setBook]=useState(null)

useEffect(function(){
    fetch("http://localhost:3000/books/" +id)
    .then (function(res){
        if(!res.ok){
            throw new Error("Book not found")

        }
        return res.json()
    })
    .then(function(data){
        setBook(data)
    })
},[])
if (!book)return<p>No book Found</p>
return (
    <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>

        <button>
            <Link to="/books">Back to Books</Link>
        </button>
        

    </div>
)
}
export default BookDetail
