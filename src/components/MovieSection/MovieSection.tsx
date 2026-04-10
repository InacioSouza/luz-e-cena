import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../InputText/InputText';
import styles from './MovieSection.module.css'
import MovieList from '../MovieList/MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/useFilterMovies';
import type React from 'react';

const MovieSection = () => {

    const { movies, error, isLoading } = useFetchMovies();
    const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFilterMovies(movies);

    return (
        <main>
            <section className={styles.container}>
                <Fieldset variant='secondary'>
                    <InputText 
                        value={searchTerm}
                        onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) => 
                                setSearchTerm(event.target.value)
                        }
                        placeholder='Buscar filmes ...'>
                    </InputText>
                    <Button variant='icon' onClick={handleSearch}>
                        <FaSearch />
                    </Button>
                </Fieldset>
                <h1 className={styles.titulo}>Em cartaz</h1>
                {error && <p className={styles.error}>{error}</p>}
                {isLoading && <p>Carregando Filmes...</p>}
                <MovieList movies={filteredMovies} />
            </section>
        </main>
    );
}

export default MovieSection;