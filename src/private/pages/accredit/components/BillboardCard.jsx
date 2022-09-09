import { API_REST } from '../../../../helper/routes';
import './BillboardCard.css';

export const BillboardCard = ({bill}) => {
    
    const dir = API_REST;
    return (
        <div className="Billboard-cards">
            <img src={dir + bill.photo_movie} alt="movie" />
            <p>{bill.name_movie}</p>
        </div>
    )
}
