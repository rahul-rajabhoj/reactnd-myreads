import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelves from './Shelves';
import Search from './Search';

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
          <Search 
            shelfBooks={books}
            shelves={shelves}
            updateBookShelf={this.updateBookShelf}
          />
        )} />

        <Route exact path='/' render={() => (
          <Shelves
            books={books}
            shelves={shelves}
            updateBookShelf={this.updateBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
