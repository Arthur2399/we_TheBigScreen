import { useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../../../hooks/useForm';
import { useGetSchedule, usePostSchedule } from '../hooks/usePostSchedule';
import './BillboardForm.css';

const formData = {
    "day_timetable": '',
    "hour_timetable": '',
    "room": '',
}

const hoy = new Date();
function formatoFecha(fecha, formato) {
    const map = {
        dd: fecha.getDate(),
        MM: (fecha.getMonth() + 1).toString().padStart(2, '0'),
        yyyy: fecha.getFullYear()
    }
    return formato.replace(/dd|MM|yyyy/gi, matched => map[matched])
}
const fecha = formatoFecha(hoy, "yyyy-MM-dd");


export const BillboardForm = ({ movieId, closeModal, setIsReload, isReload, isOpen }) => {


    const [dateSumary, setDateSumary] = useState(fecha);
    const [scheduleList, setScheduleList] = useState([]);
    const { formState, onResetForm, onInputChange, day_timetable, hour_timetable, room } = useForm(formData);

    useMemo(async () => {
        const data = {
            "schedule_id": movieId,
            "day_timetable": dateSumary
        }
        if (movieId > 0) {
            const { resp } = await useGetSchedule(JSON.stringify(data))
            setScheduleList(resp)
        }
    }, [dateSumary, movieId, formState])

    const onCreateSchelude = async (event) => {
        event.preventDefault();
        const des_answer = await Swal.fire({
            title: '¿Seguro que deseas crear este horario?',
            showCancelButton: true,
            confirmButtonText: 'Crear',
            confirmButtonColor: "#FD5D5D"
        })
        if (des_answer.isConfirmed) {
            const { resp, response } = await usePostSchedule(JSON.stringify({ ...formState, schedule_timetable: movieId }));
            if (response.status == 201) {
                /* closeModal(); */
                Swal.fire({
                    icon: 'success',
                    title: 'Horario creado',
                    text: resp.Mensaje,
                    confirmButtonColor: "#FD5D5D"
                })
                onResetForm();
                setIsReload(isReload + 1);
            } else {
                const fisrtKey = Object.keys(resp)[0]
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: resp[fisrtKey],
                    confirmButtonColor: "#FD5D5D"
                })
            }
        }
    }

    return (
        <form className='Billboard-form' onSubmit={onCreateSchelude}>
            <div className='Billboard-form-Container'>
                <label className='Billboard-form-label' >Fecha:</label>
                <input
                    type="date"
                    className='Billboard-form-inputs'
                    name='day_timetable'
                    value={day_timetable}
                    onChange={onInputChange}
                />
                <label className='Billboard-form-label'>Hora:</label>
                <input
                    type="time"
                    className='Billboard-form-inputs'
                    name='hour_timetable'
                    value={hour_timetable}
                    onChange={onInputChange}
                />
                <label className='Billboard-form-label'>Sala</label>
                <input
                    type="number"
                    className='Billboard-form-inputs'
                    name='room'
                    value={room}
                    onChange={onInputChange}
                />
                <button className='Billboard-button-sent' type='submit'>Agregar</button>
            </div>
            <div className='Billboard-form-Container'>
                <label className='Billboard-form-label'>Fecha de los horarios:</label>
                <input
                    type="date"
                    className='Billboard-form-inputs'
                    value={dateSumary}
                    onChange={(e) => setDateSumary(e.target.value)}
                />
                <div className='Billboard-Schedule-container'>
                    {
                        scheduleList.map((schedule, i) => (
                            <div key={i} className='Billboard-schedule-list'>
                                <h4>{schedule.movie_name}</h4>
                                <span>Sala: {schedule.room}</span>
                                <span>Hora: {schedule.hour}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='Billboard-form-Container'>
            </div>
        </form>
    )
}
