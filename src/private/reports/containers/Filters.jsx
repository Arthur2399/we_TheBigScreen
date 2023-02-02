import { useState } from 'react';
import { useEffect } from 'react';
import { useGetBranchs } from '../../branch/hooks/useGetBranchs';
import './Filters.css';

export const Filters = ({setDataFilter}) => {

    const [encuentasPeriodo, setEncuentasPeriodo] = useState([]);
    const [sucursales, setSucursales] = useState([]);

    const [selectEncuesta, setselectEncuesta] = useState();
    const [selectScursal, setSelectSucursal] = useState();

    
    useEffect(() => {
        const dataForFilter = {
            period:selectEncuesta,
            branch:selectScursal,
        }
        setDataFilter(dataForFilter)
    }, [selectEncuesta,selectScursal])
    

    useEffect(() => {
      //TODO  1. Traer los periodos de encuentas
      const fetchData= async()=> {
        const resp = await useGetBranchs();
        setSucursales(resp)
      }

      fetchData();

    }, [])
    

    return (
        <div className='filter-grid'>
            <label> Encuesta del: </label>
            <select name="select" className="combobox-container" onChange={e => setselectEncuesta(e.target.value)}>
                <option value= ''> Seleccione uno</option>
                <option value= '1'> Encuesta 1</option>
                <option value= '2'> Encuesta 2</option>
                <option value= '3'> Encuesta 3</option>
            </select>
            <label> Franquicia: </label>
            <select name="select" className="combobox-container" onChange={e=>setSelectSucursal(e.target.value)}>
                <option value="">Seleccione uno</option>
                {
                    sucursales.map((surcusal)=>(
                        <option key={surcusal.id} value={surcusal.id}>{surcusal.name_branch}</option>
                    ))
                }
            </select>
        </div>
    )
}
