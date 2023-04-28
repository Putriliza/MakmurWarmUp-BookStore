import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from '../App';

test('Renders main page correctly', async () => {
    // Setup
    render(<App />);
    const buttonAdd = await screen.findByRole('button')

    expect(buttonAdd.innerHTML).toBe('Add +');

    // Init
    user.click(buttonAdd);

    // Post Expectations
    // check if the modal Add Book appeared
    const addBook = await screen.findByText('Add Book');
    expect(addBook).toBeInTheDocument();

    // find with class close
    const buttons = await screen.findAllByRole('button');
    const buttonClose = buttons.find((button) => button.className === 'close');
    expect(buttonClose).toBeInTheDocument();

});