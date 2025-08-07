import Book from "./Book"
function BookList(){ 
    const books=[
        {id:1, title:"Introduction to HTML",author:"Mark F."},
        {id:2, title:"Introduction to CSS",author:"Mary F."},
        {id:3, title:"Introduction to Javascript",author:"Alice F."},
        {id:4, title:"Introduction to React",author:"John F."}
    ]
    return(
        <div>
            {books.map((book)=>(
                <Book key={book.id}
                title={book.title}
                author={book.author}/>
            ))}
        </div>
    )
}
export default BookList