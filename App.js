import React, { Component } from 'react';
import './App.css';
import ListUsers from  './ListUsers.js';
import logo from './logo.svg';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = [
  {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
];

const movies = [
  {
    id: 1,
    name: 'Planet Earth 1',
  },
  {
    id: 2,
    name: 'Selma',
  },
  {
    id: 3,
    name: 'Million Dollar Baby',
  },
  {
    id: 4,
    name: 'Forrest Gump',
  },
  {
    id: 5,
    name: 'Get Out',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>
		<div>
			<ListUsers users={users} profiles={profiles} movies={movies} />
		</div>
      </div>
    );
  }
}

export default App;
