import Button from "../../Buttons/Button";
import DeleteButton from "../../Buttons/DeleteButton";

export default function AreasPanel({ data }) {
    return (
        <div>
            <table className="areasTable">
                <thead style={{ border: '1px solid black' }}>
                    <tr>
                        <th>Nombre de area</th>
                        <th>Pacientes</th>
                        <th>Medicos</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map((area, index) => (
                        <tr key={index}>
                            <td>{area.name}</td>
                            <td>{area.pacientes}</td>
                            <td>{area.medicos}</td>
                            <td><DeleteButton /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button text={'Ver todos'} />
        </div>
    );
}
