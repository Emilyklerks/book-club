import {BookData} from "../../data/book-data";
import {useEffect, useState} from "preact/hooks";

const Books = () => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        document.title = 'Books';
        BookData
            .then(books => {
                setBookList(books)
            })
        return () => document.title = 'bla';
    }, [BookData, setBookList]);

    return (
        <div>
        {bookList.map((book) => (
            <>
                <h1>{book.title}</h1>
                <p>Written by {book.author.firstName}{book.author.lastName}</p>
            </>
            ))
        }
        </div>
    )
}

export default Books;