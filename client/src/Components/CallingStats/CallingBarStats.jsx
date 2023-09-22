import { Chart } from "react-google-charts";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import TimePicker from "react-time-picker";
import { CSVLink } from "react-csv";
import { useEffect } from "react";
import { obtenerCantidadLlamadosNoAtendidosCodigoAzul, obtenerAreas, obtenerUbicaciones, obtenerCantidadLlamadosAtendidosCodigoAzul, obtenerCantidadLlamadosNoAtendidosNormales, obtenerCantidadLlamadosAtendidosNormales, obtenerCantidadLlamadosNoAtendidosCodigoAzulFiltroArea, obtenerCantidadLlamadosAtendidosCodigoAzulFiltroArea, obtenerCantidadLlamadosNoAtendidosNormalesFiltroArea, obtenerCantidadLlamadosAtendidosNormalesFiltroArea, obtenerCantidadLlamadosNoAtendidosCodigoAzulFiltroUbi, obtenerCantidadLlamadosAtendidosCodigoAzulFiltroUbi, obtenerCantidadLlamadosNoAtendidosNormalesFiltroUbi, obtenerCantidadLlamadosAtendidosNormalesFiltroUbi } from "../../Functions/dbFunctions";

export default function CallingBarStats() {
    const [data, setData] = useState([]);
    const [noAtendidosCAzul, setNoAtendidosCAzul] = useState(null);
    const [atendidosCAzul, setAtendidosCAzul] = useState(null);
    const [noAtendidos, setNoAtendidos] = useState(null);
    const [atendidos, setAtendidos] = useState(null);

    const [areas, setAreas] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const [activeLink, setActiveLink] = useState(false);
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const areasData = await obtenerAreas();
            setAreas(areasData);
      
            const ubicacionesData = await obtenerUbicaciones();
            setUbicaciones(ubicacionesData);
      
            
          } catch (error) {
            // Manejar errores si ocurren al obtener los datos
            console.error("Error al obtener datos:", error);
          }
        };
      
        fetchData(); // Llama a la función fetchData para obtener datos
      },[]);
    async function renderizarLlamdosSinFiltro() {
        try {
            // Después de obtener los datos de áreas y ubicaciones, llama a renderizarLllamdosSinFiltro()
            const dataNoAtendidosCAzul = await obtenerCantidadLlamadosNoAtendidosCodigoAzul();
            const dataAtendidosCAzul = await obtenerCantidadLlamadosAtendidosCodigoAzul();
            const dataNoAtendidos = await obtenerCantidadLlamadosNoAtendidosNormales();
            const dataAtendidos = await obtenerCantidadLlamadosAtendidosNormales();
    
            setNoAtendidosCAzul(parseInt(dataNoAtendidosCAzul));
            setAtendidosCAzul(parseInt(dataAtendidosCAzul));
            setNoAtendidos(parseInt(dataNoAtendidos));
            setAtendidos(parseInt(dataAtendidos));
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    }
    

    async function renderizarLllamdosFiltroArea() {
        obtenerCantidadLlamadosNoAtendidosCodigoAzulFiltroArea(selectedArea).then((data) => {
            setNoAtendidosCAzul(parseInt(data));
        })
        obtenerCantidadLlamadosAtendidosCodigoAzulFiltroArea(selectedArea).then((data) => {
            setAtendidosCAzul(parseInt(data));
        })
        obtenerCantidadLlamadosNoAtendidosNormalesFiltroArea(selectedArea).then((data) => {
            setNoAtendidos(parseInt(data));
        })
        obtenerCantidadLlamadosAtendidosNormalesFiltroArea(selectedArea).then((data) => {
            setAtendidos(parseInt(data))
        })
    }
    async function renderizarLllamdosFiltroUbicacion() {
        try {
          const noAtendidosCAzulData = await obtenerCantidadLlamadosNoAtendidosCodigoAzulFiltroUbi(selectedLocation);
          setNoAtendidosCAzul(parseInt(noAtendidosCAzulData));
      
          const atendidosCAzulData = await obtenerCantidadLlamadosAtendidosCodigoAzulFiltroUbi(selectedLocation);
          setAtendidosCAzul(parseInt(atendidosCAzulData));
      
          const noAtendidosData = await obtenerCantidadLlamadosNoAtendidosNormalesFiltroUbi(selectedLocation);
          setNoAtendidos(parseInt(noAtendidosData));
          console.log('no atendidos: '+noAtendidos)
          const atendidosData = await obtenerCantidadLlamadosAtendidosNormalesFiltroUbi(selectedLocation);
          setAtendidos(parseInt(atendidosData));
        } catch (error) {
          // Manejar errores si ocurren al obtener los datos
          console.error("Error al obtener datos:", error);
        }
       
      }
      

    async function formatearData() {
        if (atendidosCAzul !== null && noAtendidosCAzul !== null && atendidos !== null && noAtendidos !== null) {
          setData([
            ["Llamados", "Cantidad", { role: "style" }],
            ["Atendidos de emergencia", atendidosCAzul, "#FF5050"],
            ["No atendidos de emergencia", noAtendidosCAzul, "#720000"],
            ["Atendidos normales", atendidos, "#3EE3B6"],
            ["No Atendidos Normales", noAtendidos, "color: #068764"]
          ]);
        }
      }
      
      
      
    useEffect(() => {
        formatearData();
    }, [atendidosCAzul, noAtendidosCAzul, atendidos, noAtendidosCAzul])
    useEffect(() => {
        console.log(selectedArea);

        (async () => {
            if (selectedArea) {
                await renderizarLllamdosFiltroArea();
            } else if (selectedLocation) {
                await renderizarLllamdosFiltroUbicacion();
            } else {
                console.log('aaaaaaa')
                await renderizarLlamdosSinFiltro();
            }
        })();
        console.log(atendidosCAzul);
        formatearData();
    }, [selectedArea, selectedLocation])

    const options = {
        legend: { position: "none" }
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
                    <div style={{ display: 'flex', width: '100%' }}>
                        <select value={selectedArea} onChange={handleSelectArea} onClick={() => handleLinkClick(0)} style={{ width: '100%' }} disabled={selectedLocation !== null && selectedLocation !== ""}>
                            <option value="">Área</option>
                            {areas.map((area) => (
                                <option key={area.id_area} value={area.id_area}>
                                    {area.id_area + ' ' + area.nombre_area}
                                </option>
                            ))}

                        </select>
                        <select onClick={() => handleLinkClick(1)} value={selectedLocation} onChange={handleSelectLocation} style={{ width: '100%' }} disabled={selectedArea !== null && selectedArea !== ""}>
                            <option value="">Ubicación</option>
                            {ubicaciones.map((ubicacion) => (
                                <option key={ubicacion.id_ubicacion} value={ubicacion.id_ubicacion}>
                                    {ubicacion.nombre_ubicacion + ' ' + ubicacion.numero_ubicacion + ' - ' + ubicacion.nombre_area}
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
