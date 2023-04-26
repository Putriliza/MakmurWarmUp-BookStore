import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {fetchCountries} from "../redux/reducers/countries";
import {BookModel, fetchBooks, addBook} from "../redux/reducers/books";

function App() {

    const {countries} = useAppSelector((state) => state.countries);
    const {books} = useAppSelector((state) => state.books);
    const countryDispatch = useAppDispatch();
    const bookDispatch = useAppDispatch();

    useEffect(() => {
        countryDispatch(fetchCountries());
        bookDispatch(fetchBooks());
    }, []);
    
    const addBookHandler = () => {
        const book: BookModel = {
            title: "Test1",
            author: "Rebecca Smith",
            isbn: "c26b531a-8909-4125-893b-ea8b47020ec5",
            publishedOn: "2021-10-15T02:58:34.267Z",
            numberOfPages: 16,
            country: "Nigeria",
            imageUrl: "https://picsum.photos/200/300"
        }
        bookDispatch(addBook(book));
    }

  return (
    <div>
        <>
            <ul>
                {
                    countries.map((item) => <li key={item._id}>{item.name} {item.createdAt}</li>)
                }
            </ul>
            <ul>
                {
                    books.map((item) => <li key={item._id}>{item.title}</li>)
                }
            </ul>

            <button onClick={addBookHandler}>Add Book</button>
        </>
    </div>
  );
}

export default App;