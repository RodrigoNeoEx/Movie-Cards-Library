import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';
import Videos from './components/videos';
function App() {
  return (
    <div className="App">
      <Header />
      <Videos />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
