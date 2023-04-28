import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookModel } from '../models/books';
// import { styled } from '@linaria/react';

import Card from './Card';
import Modal from './Modal';

const Body = () => {
    const dispatch = useDispatch();
    const books = useSelector((state: any) => state.books.books);

    useEffect(() => {
        dispatch.books.fetchBooks();
    }, [dispatch]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // const Title = styled.h1`
    //     color: red;
    //     font-size: 50px;
    // `;

    window.onclick = function(event: any) {
        const modal = document.getElementById("myModal");
        if (event.target === modal) {
            setIsModalOpen(false);
        }
    }

  return (
    <div className="body">
        <div className="container">
            <div className='books-header'>
                <h3>Books ({books.length})</h3>
                <button
                    onClick={() => setIsModalOpen(true)}
                >
                    Add +
                </button>
            </div>
            <div className="cards">
                {
                    books.map((item: BookModel) => <Card key={item._id} {...item} />)
                }
            </div>
        </div>

        {
            isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                />
            )
        }
    </div>
  );
}

export default Body;