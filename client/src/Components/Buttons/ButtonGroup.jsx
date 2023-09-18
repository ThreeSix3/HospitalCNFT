import MenuButton from "./MenuButton";
export default function ButtonGroup() {
    return (
        <div>
            <MenuButton text={'Crear Áreas'} />
            <MenuButton text={'Asignar enfermeros'} />
            <MenuButton text={'Asignar pacientes'} />
        </div>
    );
}
