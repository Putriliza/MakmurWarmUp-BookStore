import { BookModel } from "../models/books"

const Card = (book: BookModel) => {
    const displayDate = (date: string) => {
        const dateObj = new Date(date);
        const month = dateObj.toLocaleString('default', { month: 'long' });
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        return `${month} ${day}, ${year}`;
    }


    return (
        <div className="card">
            <div className="card-details">
                <div className="card-details-header">
                    <h1 className="book-title">{book.title}</h1>
                    <h3 className="book-author">Book by {book.author}</h3>
                </div>
                <div className="card-details-body">
                    <div>
                        <p className="text-secondary">ISBN</p>
                        <p>{book.isbn}</p>
                    </div>
                    <div>
                        <p className="text-secondary">Number of Page</p>
                        <p>{book.numberOfPages} pages</p>
                    </div>
                    <div>
                        <p className="text-secondary">Published On</p>
                        <p>{displayDate(book.publishedOn)}</p>
                    </div>
                    <div>
                        <p className="text-secondary">Country Publisher</p>
                        <p>{book.country}</p>
                    </div>
                </div>
            </div>
            <div className="card-image">
                <img src={book.imageUrl} alt={book.title} />
            </div>
        </div>
    )
}

export default Card;

