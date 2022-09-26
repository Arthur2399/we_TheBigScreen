import { useState } from 'react';
import { ScannerQR, ClientProfile } from '../components';
import { AccreditsPoints, BillboardCards } from '../containers';
import './Accredit.css';

export const Accredit = () => {
    const [clientData, setClientData] = useState({});
    const [billboard, setBillboard] = useState();
    return (
        <section className="Accredits">
            <div className="Accredits-container">
                <h1 className="Accredits-title">Acreditar puntos</h1>
                <div className="Accredits-desing-container">
                    <div className="Accredits-view-container">
                        <div className="Accredits-movies">
                            <h2>Cartelera</h2>
                            <div className="movies-scroll-container">
                                <BillboardCards setBillboard={setBillboard} /> 
                            </div>
                        </div>
                        <div className="information-container">
                            <div className="qr-escanner">
                                <h2>Escanear QR</h2>
                                <ScannerQR setClientData={setClientData}/>
                            </div>
                            <div className="user-profile">
                                <h2>Perfil del usuario</h2>
                                <ClientProfile clientData={clientData}/>
                            </div>
                        </div>
                        <div className="accredit-points">
                            <h2>Detalle</h2>
                            <AccreditsPoints billboard={billboard} clientData={clientData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
