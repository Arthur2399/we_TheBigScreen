import { API_IMAGE } from '../../../helper/routes';
import './BillboardList.css';

export const BillboardList = ({ movie_photo, movie_name, movie_date, billboard }) => {
    return (
        <div className="billboard-list animate__animated animate__fadeIn" >
            <img src={`${API_IMAGE}${movie_photo}`} alt="movie" />
            <div className="billboard-list-info">
                <h4>{movie_name}</h4>
                <p>{movie_date}</p>
                <div className="billboard-hour-room">
                    {
                        billboard.map((bill, i) => (
                            <div className="billboard-hour-room-container">
                                <span> <b>Hora:</b> {bill.time}</span>
                                <span> <b>Sala:</b> {bill.room}</span>
                            </div>
                        ))
                    }
                    <span>...</span>
                </div>
            </div>
        </div>
    )
}
