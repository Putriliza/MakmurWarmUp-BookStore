import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries, fetchBooks, addBook } from '../redux/actions';
import store from '../redux/store';

const BookStore = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchCountries();
    fetchBooks();
  }, [dispatch]);

  const countries = useSelector((state : typeof store.getState) => state.countries);
  const books = useSelector((state : typeof store.getState) => state.books);

  console.log(countries);

  const handleAddBook = () => {
    const newBook = {
      title: 'New Book',
      author: 'John Doe',
      isbn: '123456',
      publishedOn: '2023-04-26T10:00:00.000Z',
      numberOfPages: 100,
      country: 'Canada',
      imageUrl: 'https://picsum.photos/200/300',
    };
    // addBook(newBook);
  };

  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {countries.map((country : any) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
      <h2>Books</h2>
      <button onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map((book : any) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookStore;