import { useState } from 'react';
import './Book.css'; // Import the styles
import { Link } from 'react-router-dom';

function Book({ title, author ,id}) {
  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <div className="book-card">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">Author: {author}</p>
      
      <button className="toggle-btn" onClick={toggleDescription}>
        {showDescription ? "Hide" : "Show"} Description
      </button>
      
      {showDescription && (
        <p className="book-description">
          This is a great book. Highly recommend!!!
        </p>
      )}
      <p>
        <Link to={`/books/${id}`}>View details</Link>
      </p>
    </div>
  );
}

export default Book;
