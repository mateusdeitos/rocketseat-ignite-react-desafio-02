import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Genre {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface GenreContextData {
    genres: Genre[];
    selectedGenre: Genre;
    updateSelectedGenre: (genre: Genre) => void;
}

export const GenreContext = createContext<GenreContextData>({} as GenreContextData);

export const GenreProvider: React.FC = ({ children }) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

    const updateSelectedGenre = useCallback((genre: Genre) => {
        setSelectedGenre(genre);
    }, []);

    useEffect(() => {
        api.get<Genre[]>('genres').then(response => {
            setGenres(response.data);
            setSelectedGenre(response.data[0]);
        });
    }, []);

    return (
        <GenreContext.Provider value={{
            genres,
            selectedGenre,
            updateSelectedGenre,
        }}>
            {children}
        </GenreContext.Provider>
    )
}

export const useGenre = () => {
    return useContext(GenreContext);
}