import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate() {
    const [bookTitle, setBookTitle] = useState("");

    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setBookTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(bookTitle);
        setBookTitle("");
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    className="input"
                    value={bookTitle}
                    onChange={handleChange}
                />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;
