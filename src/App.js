import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelf from './Shelf';
import { Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    shelves: [
      {
        label: 'Currently Reading',
        value: 'currentlyReading'
      },
      {
        label: 'Want to Read',
        value: 'wantToRead'
      },
      {
        label: 'Read',
        value: 'read'
      }
    ],
    books: []
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(booksData => {
      this.setState((currentState) => ({
        books: booksData
      }))
    })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( data => {
      this.getAllBooks();
    })
  }

  componentDidMount() {
    this.getAllBooks();
  };

  render() {
    const { shelves, books } = this.state;

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )} />

        <Route exact path='/' render={() => (
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
                    books={shelfBooks}
                    shelves={shelves}
                    updateBookShelf={this.updateBookShelf}
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
        )}/>
      </div>
    )
  }
}

export default BooksApp
