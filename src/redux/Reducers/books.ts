import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface BookModel {
    createdAt?: string,
    title: string,
    author: string,
    isbn: string,
    publishedOn: string,
    numberOfPages: number,
    country: string,
    imageUrl: string,
    _id?: string
}

interface BooksState {
    loading: boolean
    books: BookModel[]
}

const initialState: BooksState = {
    loading: false,
    books: []
}

export const fetchBooks = createAsyncThunk('get/books', async ():Promise<[BookModel]> => {
    const response = await fetch("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books");
    return await response.json();
})

export const addBook = createAsyncThunk('add/book', async (book: BookModel):Promise<[BookModel]> => {
    const response = await fetch("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });
    return await response.json();
})


export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchBooks.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(addBook.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addBook.fulfilled, (state, action) => {
            state.books = [...state.books, ...action.payload];
            state.loading = false;
        });
        builder.addCase(addBook.rejected, (state) => {
            state.loading = false;
        });
    }
});

export default bookSlice.reducer;