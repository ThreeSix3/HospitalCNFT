import PatientsList from "./PatientsList";
import DefaultCard from "../DefaultCard";
import data from "./data";
export default function PatientsPanel() {
    return (
        <div style={{ width: '70%' }}>
            <DefaultCard title={"Pacientes"} children={<PatientsList patientsData={data} />} />
        </div >
    );
}   
