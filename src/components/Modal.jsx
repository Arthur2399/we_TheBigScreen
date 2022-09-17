import './Modal.css';

export const Modal = ({ isOpen, closeModal,title, children, x,y }) => {
    return (
        <div className={`Modal ${isOpen && 'Modal-Open'}`}>
            <div className='Modal-dialog' style={{ width: x, height: y }}>
                <div className='Modal-dialog-head'>
                    <h1>{title}</h1>
                    <button onClick={closeModal} className="Close-button">X</button>
                </div>
                {children}
            </div>
        </div>
    )
}
