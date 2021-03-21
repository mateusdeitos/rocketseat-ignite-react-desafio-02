import React from "react";
import { useGenre } from "../contexts/GenreContext";
import { useMovies } from "../contexts/MovieContext";
import { Button } from "./Button";


export function SideBar() {
  const { genres, selectedGenre, updateSelectedGenre } = useGenre();
  const { movies } = useMovies();
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => updateSelectedGenre(genre)}
            selected={selectedGenre.id === genre.id}
            count={movies.length}
          />
        ))}
      </div>

    </nav>
  )
}