import { QrReader } from 'react-qr-reader'
import { useGetClient } from '../hooks/useGetClient'
import './ScannerQR.css'
import qr from '/assets/logos/qr.svg'


export const ScannerQR = ({ setClientData }) => {

    const getUserHash = async (data) => {
        const userData = {
            qr: data,
        }
        const resp = await useGetClient(JSON.stringify(userData));
        setClientData(resp)
    }

    return (
        <div className="qr-escanner-info">
            <img src={qr} alt="qr" />
            <div>
                <h2>Escanea el código</h2>
                <p>Haz que usuario ponga su codigo en el lector para ver sus datos</p>
            </div>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        getUserHash(result?.text)
                    }
                    if (!!error) {
                    }
                }}
                style={{ width: '100%' }}
                constraints={{ facingMode: 'environment' }}
            />
        </div>
    )
}
