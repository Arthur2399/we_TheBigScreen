import reports from '/assets/logos/reports.svg';
import arrow from '/assets/icons/left-arrow.svg';
import'./ReportsInfo.css';

export const ReportsInfo = () => {
  return (
    <div className="Awards-info-container">
    <img src={reports} alt="reports" className='animate__animated animate__bounce'/>
    <h1>The Big Screen</h1>
    <div className="arrow-text">
        <img src={arrow} alt="arrow" />
        <p>Conoce todas las estadísticas de las encuestas de satisfacción del cliente</p>
    </div>
</div>
  )
}
