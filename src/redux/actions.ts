import axios from 'axios';

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK_SUCCESS,
} from './types';

export interface Country {
  createdAt: string;
  name: string;
  id: string;
}

export interface Book {
  createdAt: string;
  title: string;
  author: string;
  isbn: string;
  publishedOn: string;
  numberOfPages: number;
  country: string;
  imageUrl: string;
  id: string;
}

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});

export const fetchCountriesSuccess = (countries: Country[]) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (error: string) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});

export const fetchCountries = () => async (dispatch: any) => {
  dispatch(fetchCountriesRequest());
  try {
    const response = await axios.get('https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries');
    const countries = response.data;
    dispatch(fetchCountriesSuccess(countries));
  } catch (error) {
    dispatch(fetchCountriesFailure(error.message));
  }
};

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books: Book[]) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error: string) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = () => async (dispatch : any) => {
  dispatch(fetchBooksRequest());
  try {
    const response = await axios.get('https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books');
    const books = response.data;
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};

export const addBookSuccess = (book: Book) => ({
  type: ADD_BOOK_SUCCESS,
  payload: book,
});

export const addBook = (book: Book) => async (dispatch: any) => {
  try {
    const response = await axios.post('https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books', book);
    const newBook = response.data;
    dispatch(addBookSuccess(newBook));
  } catch (error) {
    console.error(error);
  }
};