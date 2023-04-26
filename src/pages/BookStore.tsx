import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookModel } from '../models/books';
import { CountryModel } from '../models/countries';


function BookStore() {

    const dispatch = useDispatch();
    const countries = useSelector((state: any) => state.countries.countries);
    const books = useSelector((state: any) => state.books.books);

    useEffect(() => {
        console.log("1")
        dispatch.countries.fetchCountries();
        dispatch.books.fetchBooks();
    }, [dispatch]);

    const addBookHandler = () => {
        const book: BookModel = {
            title: "Test2",
            author: "Rebecca Smith",
            isbn: "c26b531a-8909-4125-893b-ea8b47020ec5",
            publishedOn: "2021-10-15T02:58:34.267Z",
            numberOfPages: 16,
            country: "Nigeria",
            imageUrl: "https://picsum.photos/200/300"
        }
        console.log("add book");
        dispatch.books.addBook(book);
        console.log("add book2");
    }

  return (
    <div>
        <>
            <ul>
                {
                    countries.map((item: CountryModel) => <li key={item._id}>{item.name} {item.createdAt}</li>)
                }
            </ul>
            <ul>
                {
                    books.map((item: BookModel) => <li key={item._id}>{item.title}</li>)
                }
            </ul>

            <button onClick={addBookHandler}>Add Book</button>
        </>
    </div>
  );
}

export default BookStore;