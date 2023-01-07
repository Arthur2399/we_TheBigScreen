import './PlayGame.css';

export const PlayGame = () => {
    return (
        <div className='Play-game'>
            <span>Sala de cine:</span>
            <select name="select" className="combobox-container">
                <option value="value1">Seleccione uno</option>
                <option value="value2">Sala 1</option>
                <option value="value3">Sala 15</option>
            </select>
            <button >Jugar</button>
        </div>
    )
}
