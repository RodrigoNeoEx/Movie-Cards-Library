import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <div className="movie-card-body">
      <div className="cardTitle"><h4 className="movie-card-title">{movie.title}<div       className="movie-card-rating"><Rating rating={movie.rating} />
      </div></h4></div>
      <h5 className="movie-card-subtitle ">{movie.subtitle}</h5>
      <p className="movie-card-storyline">{movie.storyline}</p>
      <img src={ movie.imagePath } alt="movieImage" className="movie-card-image" />
    </div>
  </div>
);


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
