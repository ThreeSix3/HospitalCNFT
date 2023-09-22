import MenuButton from "./MenuButton";
export default function ButtonGroup({setActiveElement}) {
    return (
        <div>
            <MenuButton text={'Crear Áreas'} onClick={()=>{setActiveElement(4)}}/>
            <MenuButton text={'Asignar enfermeros'} />
            <MenuButton text={'Asignar pacientes'} />
        </div>
    );
}
