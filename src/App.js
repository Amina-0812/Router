import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import MovieDetailsPage from './MovieDetailsPage';
import Filter from './Filter';
import Movies from './Movies';
import './App.css';

const App = () => {
  const moviesData = Movies(); //getting the movie's data from Movies component
  const [filteredMovies, setFilteredMovies] = useState(moviesData); //initialize state for filtered movies

  const handleFilterChange = (type, value) => { //define function to handle filter changes
    if (type === 'title') { //if filter type is a title
      const filtered = moviesData.filter(movie => movie.name.includes(value)); //filter the movies by their title
      setFilteredMovies(filtered); //update filteredmovies state
    } else if (type === 'rating') { //if filter type is a rating
      const filtered = moviesData.filter(movie => movie.rating === value); //filter movies by rating
      setFilteredMovies(filtered); //update filteredmovies state
    }
  };

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="title">Discover the coolest movies of all time</h1>
        <Filter onFilterChange={handleFilterChange} /> {/*filter component*/}
        <Routes>
          {/* The next code sets up a route for the root URL ("/") of the app
          the 'exact' ensures the path must match exactly
          the 'path' specifies the URL path ("/")
          the 'element' renders a <div> with movie cards*/}
          <Route exact path="/" element={
            <div className="movie-grid">
              {/*this map loops through each movie in the filteredmovies array*/}
              {filteredMovies.map(movie => (
                <div className="movie-card" key={movie.id}>
                  <MovieCard movie={movie} /> {/*to display the movie card for each movie in the list*/}
                </div>
              ))}
            </div>
          } />
          {/*a route made to reveal the descrption of each movie
          the element part specifies that once the route is matched, it will render the MovieDetailsPage component, passing in the moviesData as a prop*/}
          <Route path="/movie/:id" element={<MovieDetailsPage movies={moviesData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

