import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

class Shelf extends React.Component {
    render() {
        const { shelf, shelfBooks, shelves, updateBookShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf.label }</h2>
                <Books
                    books={shelfBooks}
                    shelves={shelves}
                    updateBookShelf={updateBookShelf}
                />
            </div>
        )
    }
}

Shelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Shelf