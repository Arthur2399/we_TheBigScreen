import { BestFilm, TopHeadquarters, GreaterDemand, BranchInfo } from '../containers';
import './Branch.css';

export const Branch = () => {
    return (
        <section className="Branch">
            <div className="Branch-container">
                <h1 className="Branch-main-title">Mis sucursales</h1>
                <div className="Branch-desing-container">
                    <div className="Branch-view-container">
                        <div className="Branch-top-container">
                            <h2>Mejores calificadas</h2>
                            <div className="Branch-Headquarters-scroll-container">
                                <TopHeadquarters />
                            </div>
                        </div>
                        <div className="Branch-all-container">
                            <div className="Branch-greater-demand">
                                <h2>Meses con mayores calificaciones</h2>
                                <GreaterDemand/>
                            </div>
                            <div className="Branch-best-film">
                                <h2>Mejor película</h2>
                                <BestFilm />
                            </div>
                        </div>
                    </div>
                    <BranchInfo />
                </div>
            </div>
        </section>
    )
}
