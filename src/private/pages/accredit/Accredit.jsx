import './Accredit.css';
import { BillboardCards } from './containers/BillboardCards';

export const Accredit = () => {
    return (
        <section className="Accredits">
            <div className="Accredits-container">
                <h1 className="Accredits-title">Acreditar puntos</h1>
                <div className="Accredits-desing-container">
                    <div className="Accredits-view-container">
                        <div className="Accredits-movies">
                            <h2>Cartelera</h2>
                            <div className="movies-scroll-container">
                                <BillboardCards/>
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="qr-escanner">
                                <h2>Escanear QR</h2>
                                <div className="qr-escanner-info">
                                    <img src='' alt="qr" />
                                    <div>
                                        <h2>Escanea el código</h2>
                                        <p>Haz que usuario ponga su codigo en el lector para ver sus datos</p>
                                        <button> Scanear QR</button>
                                    </div>
                                </div>
                            </div>
                            <div className="user-profile">
                                <h2>Perfil del usuario</h2>
                                <div className="user-profile-info">
                                    <div className="user-profile-info-photo">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Zac_Efron%2C_Eva_Rinaldi_Photography_%2810%29_%2834732926735%29.jpg/800px-Zac_Efron%2C_Eva_Rinaldi_Photography_%2810%29_%2834732926735%29.jpg" alt="user" />
                                        <h2>Zack Efron</h2>
                                    </div>
                                    <div className="user-profile-info-points">
                                        <div>
                                            <h2>24</h2>
                                            <span>Peliculas</span>
                                        </div>
                                        <div>
                                            <h2>8</h2>
                                            <span>Encuestas</span>
                                        </div>
                                        <div>
                                            <h2>600</h2>
                                            <span>Puntos</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="accredit-points">
                            <h2>Detalle</h2>
                            <div className="accredit-points-container">
                                <div className="accredit-grid">
                                    <span>Fecha:</span>
                                    <select name="select" className="combobox-container">
                                        <option value="value1">Seleccione uno</option>
                                        <option value="value2">01/02/2022</option>
                                        <option value="value3">02/02/2022</option>
                                    </select>
                                    <span>Función:</span>
                                    <select name="select" className="combobox-container">
                                        <option value="value1">Seleccione uno</option>
                                        <option value="value2">15h00</option>
                                        <option value="value3">16h00</option>
                                    </select>
                                    <span>Sala:</span>
                                    <span>Número 6</span>
                                    <span>Película:</span>
{/*                                     <span>{state.ticket.length > 0 ? state.ticket.length : 'No hay pelicula'}</span>
 */}                                    <span>Sede:</span>
                                    <span>CCI</span>
                                </div>
                                <button className="accredit-points-total-button">Acreditar +100pts</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
