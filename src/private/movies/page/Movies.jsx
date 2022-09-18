import { MovieCreateInfo } from '../containers/MovieCreateInfo';
import { MoviesInfo } from '../containers/MoviesInfo';
import { NextPremiere } from '../containers/NextPremiere';
import './Movies.css';

export const Movies = () => {
    return (
        <section className="Movies">
            <div className="Movies-container">
                <h1 className="Movies-main-title">Cartelera</h1>
                <div className="Movies-desing-container">
                    <div className="Movies-view-container">
                        <div className="Movies-billboard">
                            <h2>En la pantalla grande</h2>
                            <div className="Movies-billboard-scroll">
                                {/* <MovieCards /> */}
                            </div>
                        </div>
                        <div className="Movies-all-container">
                            <div className="Movies-premiere-create">
                                <h2>Nuevo estreno</h2>
                                <MovieCreateInfo />
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
