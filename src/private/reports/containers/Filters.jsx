import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useGetBranchs, useGetPeriod } from '../hooks';
import './Filters.css';

export const Filters = ({ setDataFilter }) => {

    const [encuentasPeriodo, setEncuentasPeriodo] = useState([]);
    const [sucursales, setSucursales] = useState([]);

    const [selectSurveyDate, setSelectSurveyDate] = useState("");
    const [selectBranch, setSelectBranch] = useState("");

    useMemo(async () => {
        const { dataGetPeriod, statusGetPeriod } = await useGetPeriod();
        const { dataBranchs, statusBranchs } = await useGetBranchs();
        if (statusGetPeriod === 200 && statusBranchs === 200) {
            setSelectSurveyDate(dataGetPeriod[0].value.toString())
            setEncuentasPeriodo(dataGetPeriod)
            setSelectBranch(dataBranchs[0].id.toString())
            setSucursales(dataBranchs)
        }
    }, [])

    useEffect(() => {
        const dataForFilter = {
            template_id: selectSurveyDate,
            branch_id: selectBranch,
        }
        setDataFilter(dataForFilter)
    }, [selectSurveyDate, selectBranch])

    return (
        <div className='filter-grid'>
            <label> Encuesta: </label>
            <select className="combobox-container" value={selectSurveyDate} onChange={e => setSelectSurveyDate(e.target.value)} >
                {
                    encuentasPeriodo.map((per) => (
                        <option key={per.value} value={per.value}> {per.label}</option>
                    ))

                }
            </select>
            <label> Surcusal: </label>
            <select className="combobox-container" value={selectBranch} onChange={e => setSelectBranch(e.target.value)}>
                {
                    sucursales.map((surcusal) => (
                        <option key={surcusal.id} value={surcusal.id}>{surcusal.name_branch}</option>
                    ))
                }
            </select>
        </div>
    )
}
