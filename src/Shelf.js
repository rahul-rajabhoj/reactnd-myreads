import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends React.Component {
    render() {
        const { shelf, books, shelves, updateBookShelf } = this.props;

        console.log(`${shelf.label} Shelf Books :`, books);

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf.label }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map( (book, index) => (
                            <li key={index}>
                                <Book
                                    currentShelf={shelf}
                                    book={book}
                                    shelves={shelves}
                                    updateBookShelf={updateBookShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Shelf