import MedicalAlert from "../Components/Cards/MedicalAlert/MedicalAlert";
function MedicalAlertsPanel() {
    return (
        <div style={{ display: 'flex', width: '100%', height: '15%', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 25px 0px' }}>Alertas y llamados</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <MedicalAlert />
                <MedicalAlert />
                <MedicalAlert />
                <MedicalAlert />
                <MedicalAlert />
                <MedicalAlert />
            </div>
        </div>
    );
}

export default MedicalAlertsPanel;
