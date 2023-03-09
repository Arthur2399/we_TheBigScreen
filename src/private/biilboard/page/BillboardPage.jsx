import build from '/assets/img/build.png';
import './BillboardPage.css';

export const BillboardPage = () => {
  return (
    <div className='billboardPage'>
        <img src={build} alt="construccion" />
        <h1>Próximamente</h1>
    </div>
  )
}
