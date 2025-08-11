import { useState } from "react";

function BookForm({onAddBook}){
    const[title,setTitle]=useState("");
    const[author,setAuthor]=useState("")
 

    function handleSubmit(e){
        e.preventDefault();
        if(!title||!author){
            alert("Please fill in both fields");
            return;
        }
        onAddBook({title,author})

        setTitle("")
        setAuthor("")


    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter book title "/>
            </label>
            <label>
                Author:
                <input value={author} onChange={(e)=> setAuthor(e.target.value)} placeholder="Enter book author name"/>
            </label>
            <button type="submit">Add a book</button>
        </form>
    )

}
export default BookForm