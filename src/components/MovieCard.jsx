import React from "react";
import Watchlist from "./Watchlist";

const MovieCard = ({movie, addMovie, removeMovie, list}) => {
  const button =
    Watchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  const inWatchlist = list.filter((mov) => {
    return mov.id === movie.id;
  });

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />

        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
