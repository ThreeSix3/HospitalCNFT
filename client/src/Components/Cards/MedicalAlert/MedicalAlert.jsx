import './MedicalAlert.css';

export default function MedicalAlert() {
    const alertType = true; //cargarlo con useState y funcion

    return (
        <div className={alertType ? `cardMedicalAlert` : 'secondaryCardMedicalAlert'}>
            <h4 className='subtitle'>Quirofano 8</h4>
            <h4 className='subtitle'>13:00</h4>
            <h3 className='title' style={{ display: alertType ? 'block' : 'none' }}>CODIGO AZUL</h3>
            <h4 className='subtitle'>Area de emergencias</h4>
            <button className='medicalAlertBtn'>Aceptar</button>
        </div >
    );
}   