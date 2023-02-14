import { useMemo, useState } from 'react';
import { MovieCards, MovieCreateInfo, MoviesInfo, NextPremiere } from '../containers';
import { useGetMoviesList } from '../hooks';
import './Movies.css';

export const Movies = () => {
    const [cardsMovies, setCardsMovies] = useState([]);
    const [isReload, setIsReload] = useState(0);



    useMemo(async () => {
        const respMov = await useGetMoviesList();
        setCardsMovies(respMov)

    }, [isReload])



    return (
        <section className="Movies">
            <div className="Movies-container">
                <h1 className="Movies-main-title">Cartelera</h1>
                <div className="Movies-desing-container">
                    <div className="Movies-view-container">
                        <div className="Movies-billboard">
                            <h2>En la pantalla grande</h2>
                            <div className="Movies-billboard-scroll">
                                <MovieCards cardsMovies={cardsMovies} />
                            </div>
                        </div>
                        <div className="Movies-all-container">
                            <div className="Movies-premiere-create">
                                <h2>Nuevo estreno</h2>
                                <MovieCreateInfo setIsReload={setIsReload} isReload={isReload} />
                            </div>
                            <div className="next-premiere">
                                <h2>Proxima a estrenarse</h2>
                                <NextPremiere />
                            </div>
                        </div>
                    </div>
                    <MoviesInfo />
                </div>
            </div>
        </section>
    )
}
