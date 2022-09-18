import './ClientProfile.css';

export const ClientProfile = () => {
  return (
    <div className="user-profile-info">
    <div className="user-profile-info-photo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Zac_Efron%2C_Eva_Rinaldi_Photography_%2810%29_%2834732926735%29.jpg/800px-Zac_Efron%2C_Eva_Rinaldi_Photography_%2810%29_%2834732926735%29.jpg" alt="user" />
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
