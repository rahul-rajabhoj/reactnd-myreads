import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class Shelves extends React.Component {
    render() {
        const { books, shelves, updateBookShelf } = this.props;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                { shelves.map( (shelf, index) => {
                  const shelfBooks = books.filter( book => book.shelf === shelf.value);
                  return shelfBooks.length > 0 && <Shelf 
                    key={index}
                    shelf={shelf} 
                    shelfBooks={shelfBooks}
                    shelves={shelves}
                    updateBookShelf={updateBookShelf}
                  />
                })}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )
    }
}

Shelves.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Shelves