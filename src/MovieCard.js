import React from 'react';
import { Link } from 'react-router-dom';


//this component displays details of our movies including its image, title, rating, and buttons to see the description and watch the trailer
const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={movie.image} className="card-img-top" alt={movie.name} />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">Rating: {movie.rating}</p>
        {/* Button to navigate to movie description */}
        <Link to={`/movie/${movie.id}`} className="btn btn-primary mr-2">See Description</Link>
        {/* Button to open trailer in a new tab */}
        <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch Trailer</a>
      </div>
    </div>
  );
};

export default MovieCard;
