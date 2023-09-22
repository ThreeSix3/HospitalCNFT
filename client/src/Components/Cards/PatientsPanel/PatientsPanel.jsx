import PatientsList from "./PatientsList";
import DefaultCard from "../DefaultCard";
export default function PatientsPanel({data}) {
    return (
        <div style={{ width: '70%' }}>
            <DefaultCard title={"Pacientes"} children={<PatientsList patientsData={data} />} />
        </div >
    );
}   
