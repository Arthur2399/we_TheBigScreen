import { useState } from 'react';
import { useEffect } from 'react';
import { useGetBranchs, useGetPeriod } from '../hooks';
import './Filters.css';

export const Filters = ({ setDataFilter }) => {

    const [encuentasPeriodo, setEncuentasPeriodo] = useState([]);
    const [sucursales, setSucursales] = useState([]);

    const [selectEncuesta, setselectEncuesta] = useState();
    const [selectScursal, setSelectSucursal] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await useGetBranchs();
            setSucursales(resp)
            const respPeriod = await useGetPeriod();
            setEncuentasPeriodo(respPeriod)
        }
        fetchData();
    }, [])

    useEffect(() => {
        const dataForFilter = {
            template_id: selectEncuesta,
            branch_id: selectScursal,
        }
        setDataFilter(dataForFilter)
    }, [selectEncuesta, selectScursal])




    return (
        <div className='filter-grid'>
            <label> Encuesta: </label>
            <select name="select" className="combobox-container" onChange={e => setselectEncuesta(e.target.value)} >
                {
                    encuentasPeriodo.map((per) => (
                        <option key={per.value} value={per.value}> {per.label}</option>
                    ))

                }
            </select>
            <label> Franquicia: </label>
            <select name="select" className="combobox-container" onChange={e => setSelectSucursal(e.target.value)}>
                {
                    sucursales.map((surcusal) => (
                        <option key={surcusal.id} value={surcusal.id}>{surcusal.name_branch}</option>
                    ))
                }
            </select>
        </div>
    )
}
