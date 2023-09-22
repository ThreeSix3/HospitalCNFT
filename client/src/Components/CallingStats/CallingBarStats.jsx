import { Chart } from "react-google-charts";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import TimePicker from "react-time-picker";
import { CSVLink } from "react-csv";

export default function CallingBarStats({ data, areas }) {
    const [showFilters, setShowFilters] = useState(true);
    const [activeLink, setActiveLink] = useState(false);
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const options = {
        legend: { position: "none" }
    };

    //JSON de ejemplo. Remplazar con areas y ubicaciones en este archivo
    const opcionesJSON = {
        opcion1: 'Opción 1',
        opcion2: 'Opción 2',
        opcion3: 'Opción 3',
        opcion4: 'Opción 4',
    };

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    function setStateOfFilters() {
        setShowFilters(prevState => !prevState);
    }

    const handleSelectArea = (event) => {
        setSelectedArea(event.target.value);
    };

    const handleSelectLocation = (event) => {
        setSelectedLocation(event.target.value);
    };
    console.log(selectedArea)

    return (
        <div style={{ width: '100%', display: "flex" }}>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} options={options} />
            <div className="chartFilter" >
                <button className={`chartFilterBtn ${showFilters ? 'active' : ''}`} onClick={setStateOfFilters}>
                    <AdjustmentsHorizontalIcon style={{ width: '20px', height: '20px', margin: '2px' }} />
                    Filtros
                </button>
                <div style={{ opacity: showFilters ? '' : '0' }}>
                    <div style={{display: 'flex', width: '100%'}}>
                    <select value={selectedArea} onChange={handleSelectArea} onClick={() => handleLinkClick(0)} style={{width: '100%'}} disabled={selectedLocation !== null && selectedLocation !== ""}>
                        <option value="">Área</option>
                        {Object.keys(opcionesJSON).map((opcionKey) => (
                            <option key={opcionKey} value={opcionKey}>
                                {opcionesJSON[opcionKey]}
                            </option>
                        ))}
                    </select>
                    <select onClick={() => handleLinkClick(1)} value={selectedLocation} onChange={handleSelectLocation}  style={{width: '100%'}} disabled={selectedArea !== null  && selectedArea !== ""}>
                        <option value="">Ubicación</option>
                        {Object.keys(opcionesJSON).map((opcionKey) => (
                            <option key={opcionKey} value={opcionKey}>
                                {opcionesJSON[opcionKey]}
                            </option>
                        ))}
                    </select>
                    </div>
                    
                    <a className="cleanFilters" onClick={() => handleLinkClick(false)}>Limpiar filtros</a>
                </div>

                {/*Tendrian que llegar los datos con formato
                    Tipo de llamado / Estado / Cantidad / 
                    lo mismo el otro grafico
                */}

                <CSVLink data={data} filename={"reporte.csv"} className="cleanFilters">
                    Exportar CSV
                </CSVLink>
            </div>
        </div >
    );
}
