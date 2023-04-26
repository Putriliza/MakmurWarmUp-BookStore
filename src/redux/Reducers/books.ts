import { createSlice } from '@reduxjs/toolkit';

// data
// [
// {
// createdAt: "2022-03-24T19:36:27.944Z",
// title: "Yemen synthesize Innovative",
// author: "Rebecca Smith",
// isbn: "c26b531a-8909-4125-893b-ea8b47020ec5",
// publishedOn: "2021-10-15T02:58:34.267Z",
// numberOfPages: 16,
// country: "Nigeria",
// imageUrl: "https://picsum.photos/200/300",
// id: "1"
// },
// ]

// types of data
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

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooksStart: (state) => {
      state.loading = true;
    },
    getBooksSuccess: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    getBooksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addBookSuccess: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { getBooksStart, getBooksSuccess, getBooksFailure, addBookSuccess } = booksSlice.actions;

export default booksSlice.reducer;