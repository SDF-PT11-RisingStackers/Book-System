import BookList from "./BookList";
import "./App.css";
import { NavLink,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookDetail from "./BookDetailPage";



function App() {
  return (
    <div className="app-container">
      <h1 className="app-title"> Book System App</h1>
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:id" element={<BookDetail/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
   
      
    </div>
  );
}

export default App;
