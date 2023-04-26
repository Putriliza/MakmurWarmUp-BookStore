import { init } from '@rematch/core';
import countries from '../models/countries';
import books from '../models/books';

const models = {
    countries,
    books
}

const store = init({
    models
});

export default store;