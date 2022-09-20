import './Filters.css';

export const Filters = () => {
    return (
        <div className='filter-grid'>
            <label> Encuesta del: </label>
            <select name="select" className="combobox-container">
                <option value="value1">12/08/2022</option>
            </select>
            <label> Franquicia: </label>
            <select name="select" className="combobox-container">
                <option value="value3">CCI</option>
            </select>
        </div>
    )
}
