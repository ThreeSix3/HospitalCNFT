import './MedicalAlert.css';

export default function MedicalAlert() {
    return (
        <div className='cardMedicalAlert'>
            <h4 className='locationSubtitle'>Quirofano 8</h4>
            <h4 className='locationSubtitle'>13:00</h4>
            <h3 className='locationSubtitle'>CODIGO AZUL</h3>
            <h4 className='locationSubtitle'>Area de emergencias</h4>
            <button className='medicalAlertBtn'>Aceptar</button>
        </div >
    );
}   