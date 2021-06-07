import React from 'react';
import './App.css';
import Header from './Components/Header';
import movies from './data';
import MovieList from './Components/MovieList';
import Videos from './Components/videos';
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
