import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookModel } from '../models/books';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, ...rest }: InputProps) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input {...rest} />
        </div>
    );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: string[];
}

const Select = ({ label, options, ...rest }: SelectProps) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <select {...rest}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

interface ModalProps {
    onClose: () => void;
}


const Modal = ({ onClose }: ModalProps) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishedOn, setPublishedOn] = useState('');
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [country, setCountry] = useState('');

    const dispatch = useDispatch();
    const countries = useSelector((state: any) => state.countries.countries);

    useEffect(() => {
        dispatch.countries.fetchCountries();
    }, [dispatch]);


    const addBookHandler = () => {
        const book: BookModel = {
            title,
            author,
            isbn,
            publishedOn,
            numberOfPages,
            country,
            imageUrl: "https://picsum.photos/200/300"
        }
        dispatch.books.addBook(book);
    }

    return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
                <h3>Add Book</h3>
                <button onClick={onClose} className="close">&times;</button>
            </div>
            <hr />
            <div className="modal-body">
                <div className="form-group">
                    <Input
                        onChange={(e) => setTitle(e.target.value)}
                        label="Title"
                        type="text"
                        placeholder='e.g. Fleishman is in Trouble: A Novel'
                    />
                    <Input
                        onChange={(e) => setAuthor(e.target.value)}
                        label="Author"
                        type="text"
                        placeholder='e.g. Taffy Brodesser-Akner'
                    />
                    <Input
                        onChange={(e) => setIsbn(e.target.value)}
                        label="ISBN"
                        type="text"
                        placeholder='e.g. 9780525510871'
                    />
                    <Input
                        onChange={(e) => setPublishedOn(e.target.value)}
                        label="Published On"
                        type="date"
                    />
                    <Input
                        onChange={(e) => setNumberOfPages(parseInt(e.target.value))}
                        label="Number of Pages"
                        type="number"
                        placeholder='e.g. 384'
                    />
                    <Select
                        onChange={(e) => setCountry(e.target.value)}
                        label="Country"
                        options = {[...countries.map((country: any) => country.name)]}
                    />

                    <div className="button-container">
                        <button
                            onClick={addBookHandler}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Modal;
