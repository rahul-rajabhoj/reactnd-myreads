import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Books extends React.Component {
    render() {
        const { books, shelves, updateBookShelf } = this.props;

        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { books.map( (book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                shelves={shelves}
                                updateBookShelf={updateBookShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

Books.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Books