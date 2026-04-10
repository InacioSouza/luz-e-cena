import { useEffect, useState } from "react";
import type { Movie } from "../types";
import { getMovies } from "../api";

const useFetchMovies = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {

            setIsLoading(true);
            setError(null);

            try {
                const moviesAPI = await getMovies();
                setMovies(moviesAPI);

            } catch (error) {
                setError("Erro ao buscar filmes. Tente novamente");
                console.error(error);

            } finally {
                setIsLoading(false);
            }
        }

        fetchMovies();
    }, []);

    return { movies, isLoading, error };
}

export default useFetchMovies;