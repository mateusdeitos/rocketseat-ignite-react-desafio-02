import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useGenre } from "./GenreContext";

export interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}


interface MovieContextData {
    movies: Movie[];
}

export const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export const MovieProvider: React.FC = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const { selectedGenre } = useGenre();

    useEffect(() => {
        api.get<Movie[]>(`movies/?Genre_id=${selectedGenre.id}`).then(response => {
            setMovies(response.data);
        });
    }, [selectedGenre.id]);

    return <MovieContext.Provider value={{ movies }}>
        {children}
    </MovieContext.Provider>
}

export const useMovies = () => {
    return useContext(MovieContext);
}