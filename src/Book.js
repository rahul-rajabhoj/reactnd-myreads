import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {

    handleChange = (event) => {
        const { updateBookShelf, book } = this.props;
        updateBookShelf(book, event.target.value);
    }

    render() {
        const { shelves, book } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            { shelves.map((shelf,index) => (
                                <option 
                                    key={index} 
                                    value={shelf.value}
                                >
                                    { shelf.label }
                                </option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors && book.authors.join(', ')}</div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Book