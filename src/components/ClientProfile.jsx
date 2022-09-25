import './ClientProfile.css';

export const ClientProfile = () => {
  return (
    <div className="user-profile-info">
    <div className="user-profile-info-photo">
        <img src="/assets/img/Premios.png" alt="user" />
        <h2>Zack Efron</h2>
    </div>
    <div className="user-profile-info-points">
        <div>
            <h2 className='user-profile-number'>24</h2>
            <span>Peliculas</span>
        </div>
        <div>
            <h2 className='user-profile-number'>8</h2>
            <span>Encuestas</span>
        </div>
        <div>
            <h2 className='user-profile-number'>600</h2>
            <span>Puntos</span>
        </div>
    </div>
</div>
  )
}
