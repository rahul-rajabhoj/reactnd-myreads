import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Books from './Books';
import * as BooksAPI from './BooksAPI';

class Search extends React.Component {

    state = {
        books: [],
        query: ''
    };

    handleChange = (event) => {
        const query = event.target.value;

        this.setState({
            query: query
        });

        this.search(query.trim()); 
    }

    search = (query) => {
        const { shelfBooks } = this.props;
        BooksAPI.search(query, shelfBooks).then( resultBooks => {
            this.setState({
                books: resultBooks
            });
        });
    }

    render() {
        const { shelves, updateBookShelf, shelfBooks } = this.props;
        const { books, query } = this.state;

        if(books && books.length > 0) {
            books.forEach(book => {
              const index = shelfBooks.findIndex(x => x.id === book.id);
              if(index !== -1)
                book['shelf'] = shelfBooks[index].shelf;
              else 
                book['shelf'] = 'none';
            });
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            value={query}
                            placeholder="Search by title or author" 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {books && books.length >0 && <Books
                        books={books}
                        shelves={shelves}
                        updateBookShelf={updateBookShelf}
                    />}
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Search