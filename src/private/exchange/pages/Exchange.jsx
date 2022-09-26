import { useState } from 'react';
import { ExchangeCards, ExchangeTable} from '../containers';
import { ClientProfile, ScannerQR } from '../components';
import './Exchange.css';

export const Exchange = () => {
    const [clientData, setClientData] = useState({});
    const [award, setAward] = useState();
    return (
        <section className="Exchange">
            <div className="Exchange-container">
                <h1 className="title-exchange">Canjear puntos</h1>
                <div className="Exchange-desing-container">
                    <div className="view-container">
                        <div className="awards">
                            <h2>Lista de premios</h2>
                            <div className="awards-scroll-container">
                                <ExchangeCards setAward={setAward}/>
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="qr-escanner">
                                <h2>Escanear QR</h2>
                                <ScannerQR  setClientData={setClientData}/>
                            </div>
                            <div className="user-profile">
                                <h2>Perfil del usuario</h2>
                                <ClientProfile clientData={clientData}/>
                            </div>
                        </div>
                        <div className="exchange-points">
                            <h2>Canjear puntos</h2>
                            <ExchangeTable award={award} clientData={clientData}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
