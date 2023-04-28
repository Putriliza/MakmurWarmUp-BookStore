export interface BookModel {
  title: string,
  author: string,
  isbn: string,
  publishedOn: string,
  numberOfPages: number,
  country: string, 
  imageUrl: string,
  createdAt?: string,
  _id?: string
}

interface BooksState {
  books: BookModel[]
}

export const books = {
  state: {
    books: []
  } as BooksState,
  reducers: {
    setBooks: (state: BooksState, books: BookModel[]) => ({
      ...state,
      books
    }),
    addNewBook: (state: BooksState, book: BookModel) => ({
      ...state,
      books: [...state.books, book]
    }),
  },
  effects: (dispatch: any) => ({
    async fetchBooks(): Promise<void> {
      try {
        const response = await fetch("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books");
        const books = await response.json();
        dispatch.books.setBooks(books);
      } catch (error) {
        console.log(error);
      }
    },
    async addBook(book: BookModel): Promise<void> {
      try {
        const response = await fetch("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books", {
          method: "POST",
          body: JSON.stringify(book),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const newBook = await response.json();
        dispatch.books.addNewBook(newBook);
      } catch (error) {
        console.log(error);
      }
    },
  }),
};

export default books;