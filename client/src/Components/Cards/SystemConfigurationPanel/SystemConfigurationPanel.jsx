import ButtonGroup from "../../Buttons/ButtonGroup";
import DefaultCard from "../DefaultCard";

export default function SystemConfigurationPanel() {
    return (
        <div style={{ width: '30%' }}>
            <DefaultCard title={"Configuracion del sistema"} children={<ButtonGroup />} />
        </div >
    );
}
