import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../InputText/InputText';
import styles from './MovieSection.module.css'
import type { Movie } from '../../types';
import MovieList from '../MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api';


const MovieSection = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesAPI = await getMovies();
                setMovies(moviesAPI);
            } catch (error) {
                console.error("Erro ao buscar filmes" + error)
            }
        }

        fetchMovies();
    }, []);

    return (
        <main>
            <section className={styles.container}>
                <Fieldset variant='secondary'>
                    <InputText placeholder='Buscar filmes ...'></InputText>
                    <Button variant='icon'>
                        <FaSearch />
                    </Button>
                </Fieldset>
                <h1 className={styles.titulo}>Em cartaz</h1>
                <MovieList movies={movies} />
            </section>
        </main>
    );
}

export default MovieSection;