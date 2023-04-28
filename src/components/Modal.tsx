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
            <input id={`input-${label}`} {...rest} />
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
            <select id={`input-${label}`} {...rest}>
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

    const [errorMessages, setErrorMessages] = useState<any>({});

    const stringPattern = /^[A-Za-z0-9:-]+$/


    const dispatch = useDispatch();
    const countries = useSelector((state: any) => state.countries.countries);

    useEffect(() => {
        dispatch.countries.fetchCountries();
    }, [dispatch]);

    useEffect(() => {
        // remove error class from all inputs
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            input.classList.remove("error");
        });

        Object.keys(errorMessages).forEach((key) => {
            const input = document.getElementById(`input-${key}`);
            if (input) {
                if (errorMessages[key]) {
                    input.classList.add('error');
                }
            }
        });

    }, [errorMessages]);

    const validateInput = () => {
        const errors: any = {};

        // required fields
        if (!title) errors["Title"] = "Title is required";
        if (!author) errors["Author"] = "Author is required";
        if (!isbn) errors["ISBN"] = "ISBN is required";
        if (!publishedOn) errors["Published On"] = "Published On is required";
        if (!numberOfPages) errors["Number of Pages"] = "Number of Pages is required";
        if (!country) errors["Country"] = "Country is required";

        if (title && !stringPattern.test(title)) errors["Title"] = "Title is invalid";
        if (author && !stringPattern.test(author)) errors["Author"] = "Author is invalid";
        if (isbn && !stringPattern.test(isbn)) errors["ISBN"] = "ISBN is invalid";

        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
            return;
        }

        return true;
    }

    console.log(errorMessages);

    const addBookHandler = () => {
        if (!validateInput()) return;

        const book: BookModel = {
            title,
            author,
            isbn,
            publishedOn,
            numberOfPages,
            country,
            imageUrl: "https://picsum.photos/200/300"
        };

        dispatch.books.addBook(book);

        alert("Book added successfully");

        // reset form
        setTitle('');
        setAuthor('');
        setIsbn('');
        setPublishedOn('');
        setNumberOfPages(0);
        setCountry('');
        setErrorMessages({});
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
                        value={title}
                        placeholder='e.g. Fleishman is in Trouble: A Novel'
                    />
                    <Input
                        onChange={(e) => setAuthor(e.target.value)}
                        label="Author"
                        type="text"
                        value={author}
                        placeholder='e.g. Taffy Brodesser-Akner'
                    />
                    <Input
                        onChange={(e) => setIsbn(e.target.value)}
                        label="ISBN"
                        type="text"
                        value={isbn}
                        placeholder='e.g. 91f7df08-83d6-4b2f-929d-daeffa05522e'
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
                        value={numberOfPages}
                        placeholder='e.g. 384'
                    />
                    <Select
                        onChange={(e) => setCountry(e.target.value)}
                        label="Country"
                        value={country}
                        options = {["",
                            ...countries.map((country: any) => country.name)
                        ]}
                    />

                    <div className="button-container">
                        <button
                            onClick={addBookHandler}
                        >
                            Submit
                        </button>
                    </div>

                    <div>
                        {Object.keys(errorMessages).map((key, index) => (
                            errorMessages[key] &&
                            <p className="form-error-message">Error <span>{"*".repeat(index + 1)} {errorMessages[key]}</span></p>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Modal;
