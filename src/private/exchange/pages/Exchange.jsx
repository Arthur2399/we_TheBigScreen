import { ClientProfile, ScannerQR } from '../../../components/index';
import { ExchangeCards, ExchangeTable } from '../containers/index';
import './Exchange.css';

export const Exchange = () => {
    return (
        <section className="Exchange">
            <div className="Exchange-container">
                <h1 className="title-exchange">Canjear puntos</h1>
                <div className="Exchange-desing-container">
                    <div className="view-container">
                        <div className="awards">
                            <h2>Lista de premios</h2>
                            <div className="awards-scroll-container">
                                <ExchangeCards/>
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
                        <div className="exchange-points">
                            <h2>Canjear puntos</h2>
                            <ExchangeTable />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
