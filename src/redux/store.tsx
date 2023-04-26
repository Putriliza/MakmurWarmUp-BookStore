import {configureStore} from '@reduxjs/toolkit'
import { booksReducer, countriesReducer } from './reducers'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store =  configureStore({
    reducer: {
        countries: countriesReducer,
        books: booksReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector