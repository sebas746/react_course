import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
    const { editBookById } = useBooksContext();
    const [bookTitle, setBookTitle] = useState(book.title);

    const handleChange = (event) => {
        setBookTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBookById(book.id, bookTitle);
    };
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                className="input"
                value={bookTitle}
                onChange={handleChange}
            />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
