import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../InputText/InputText';
import styles from './MovieSection.module.css'
import MovieList from '../MovieList/MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';

const MovieSection = () => {

    const { movies, error, isLoading } = useFetchMovies();

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