import Swal from "sweetalert2"
import { useForm } from "../../../hooks/useForm"
import { usePostActor } from "../hooks/usePostActor"

const data = {
    name_actor: "",
    photo_actor: "",
}

export const CreateActor = ({newActor,setNewActor}) => {
    const { formState, onInputChange, onInputChangeImage, name_actor } = useForm(data)

    const onCreateActor = async () => {
        const { resp, response } = await usePostActor(JSON.stringify(formState))
        if (response.status == 201) {
            Swal.fire({
                icon: 'success',
                title: 'Actor creado',
                text: resp.Mensaje,
                confirmButtonColor: "#FD5D5D"
            })
            setNewActor(!newActor)
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
    return (
        <div className='Actor-Create animate__animated animate__fadeIn'>
            <h4>Crear nuevo actor</h4>
            <label className='Actor-Create-label'>Nombre:</label>
            <input
                type="text"
                className='Actor-Create-inputs'
                name='name_actor'
                value={name_actor}
                onChange={onInputChange}
            />
            <label className='Actor-Create-label'>Foto:</label>
            <input
                className='Actor-Create-inputs-photo'
                type='file'
                accept="image/png, .jpeg, .jpg, image/gif"
                name='photo_actor'
                onChange={onInputChangeImage}
            />
            <div className='Actor-Create-Conatainer'>
                <button className='Actor-Create-button Actor-summit' onClick={() => { setNewActor(!newActor) }} type='button'>Volver</button>
                <button className='Actor-Create-button Actor-summit' onClick={onCreateActor} type='button'>Añadir</button>
            </div>
        </div>
    )
}
