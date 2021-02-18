import React from 'react';
import './Moviecards.css';

class MovieCards extends React.Component {
  render() {
    const arrayMovies = [{ title: 'Senhor dos aneis', }, { title: 'Hobbits' }];
    return (
      arrayMovies.map(movie => {
        movie;
      })
    );
  }
}

export default MovieCards;