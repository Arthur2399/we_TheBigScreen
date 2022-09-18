import { AccreditsPoints } from '../containers/AccreditsPoints';
import { BillboardCards } from '../containers/BillboardCards';
import { ClientProfile } from '../../../components/ClientProfile';
import { ScannerQR } from '../../../components/ScannerQR';
import './Accredit.css';

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
                                <BillboardCards /> 
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="qr-escanner">
                                <h2>Escanear QR</h2>
                                <ScannerQR />
                            </div>
                            <div className="user-profile">
                                <h2>Perfil del usuario</h2>
                                <ClientProfile />
                            </div>
                        </div>
                        <div className="accredit-points">
                            <h2>Detalle</h2>
                            <AccreditsPoints />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
