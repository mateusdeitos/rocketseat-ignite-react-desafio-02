import React from "react";
import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
import { useGenre } from "../contexts/GenreContext";
import { useMovies } from "../contexts/MovieContext";

export function Content() {
  const { selectedGenre: genre } = useGenre();
  const { movies } = useMovies();
  
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}