import { AwardsBest } from '../containers/AwardsBest';
import { AwardsCards } from '../containers/AwardsCards';
import { AwardsInfo } from '../containers/AwardsInfo';
import { AwardsManager } from '../containers/AwardsManager';
import './Awards.css';

export const Awards = () => {
    return (
        <section className="Awards">
            <div className="Awards-container">
                <h1 className="Award-main-title">Premios</h1>
                <div className="Awards-desing-container">
                    <div className="Awards-view-container">
                        <div className="Awards-first">
                            <h2>Lista de premios</h2>
                            <div className="awards-scroll-container">
                                <AwardsCards />
                            </div>
                        </div>
                        <div className="Awards-all-container">
                            <div className="Awards-create">
                                <h2>Nuevo premio</h2>
                                <AwardsManager />
                            </div>
                            <div className="Award-top">
                                <h2>Premio mas canjeado</h2>
                                <AwardsBest />
                            </div>
                        </div>
                    </div>
                    <AwardsInfo />
                </div>
            </div>
        </section>
    )
}
