import {useState} from'react'
function Book({title,author}){
    const [showDescription, setShowDescription]=useState(false)
    // function handleClick(){
    //     alert(`See the details for ${title}`)
    // }
    function toggleDescription(){
        setShowDescription(!showDescription)
    }

    return (
        
        <div style= {{border:'1px solid gray',padding:"10px",}}>
            
            <h2>{title}</h2>
            <p>Author:{author}</p>
            <button onClick={toggleDescription}>{showDescription?"Hide":"Show"} Description </button>
            {showDescription && (
                <p>This is a great book.Highly recommend!!!!</p>
            )}
        </div>
    )
}
export default Book
