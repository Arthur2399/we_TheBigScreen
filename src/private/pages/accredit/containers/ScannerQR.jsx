import './ScannerQR.css'

export const ScannerQR = () => {
    return (
        <div className="qr-escanner-info">
            <img src='' alt="qr" />
            <div>
                <h2>Escanea el código</h2>
                <p>Haz que usuario ponga su codigo en el lector para ver sus datos</p>
                <button> Scanear QR</button>
            </div>
        </div>
    )
}
