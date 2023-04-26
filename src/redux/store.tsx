import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers';
import { fetchCountries, fetchBooks } from './actions';

const initialState = {
    countries: [
      {
        createdAt: "2022-10-16T10:43:15.978Z",
        name: "Costa Rica",
        id: "1"
      },
      {
        createdAt: "2022-10-16T20:36:24.366Z",
        name: "Papua New Guinea",
        id: "2"
      },
      {
        createdAt: "2022-10-16T13:28:23.036Z",
        name: "Liechtenstein",
        id: "3"
      },
    ],
    books: [],
}

const store = configureStore({
  reducer: rootReducer,
});

// Fetch initial data
store.dispatch(fetchCountries());
store.dispatch(fetchBooks());

export default store;