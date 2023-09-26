import { useState } from "react";

function BookCreate({ onCreate }) {
    const [bookTitle, setBookTitle] = useState("");

    const handleChange = (event) => {
        setBookTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(bookTitle);
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
