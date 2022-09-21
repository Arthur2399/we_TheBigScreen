import { EmployeCreateInfo, EmployesCards, EmployedLastCreated, EmployesInfo } from '../containers/index';
import './Employes.css';

export const Employes = () => {
    return (
        <section className="Employes">
            <div className="Employes-container">
                <h1 className="Employes-title">Empleados</h1>
                <div className="Employes-desing-container">
                    <div className="Employes-view-container">
                        <div className="Employes-list">
                            <h2>Lista de empleados</h2>
                            <div className="Employes-scroll-container">
                                <EmployesCards />
                            </div>
                        </div>
                        <div className="Employes-all-container">
                            <div className="Employ-create">
                                <h2>Nuevo empleado</h2>
                                <EmployeCreateInfo />
                            </div>
                            <div className="Employe-last-create">
                                <h2>Ultimo empleado creado</h2>
                                <EmployedLastCreated />
                            </div>
                        </div>
                    </div>
                    <EmployesInfo />
                </div>
            </div>
        </section>
    )
}
