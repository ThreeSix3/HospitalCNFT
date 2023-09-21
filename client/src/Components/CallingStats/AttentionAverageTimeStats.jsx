import { Chart } from "react-google-charts";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function AttentionAverageTimeStats({ data }) {
    const [showFilters, setShowFilters] = useState(true);
    const [activeLink, setActiveLink] = useState(false);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    function setStateOfFilters() {
        setShowFilters(prevState => !prevState);
    }

    const options = {
        curveType: "function",
        legend: { position: "none" }
    };

    return (
        <div style={{ width: '100%', display: "flex" }}>
            <Chart chartType="LineChart" width="100%" height="400px" data={data} options={options} />
            <div className="chartFilter">
                <button className={`chartFilterBtn ${showFilters ? 'active' : ''}`} onClick={setStateOfFilters}>
                    <AdjustmentsHorizontalIcon style={{ width: '20px', height: '20px', margin: '2px' }} />
                    Filtros
                </button>
                <div style={{ opacity: showFilters ? '' : '0' }}>
                    <a className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>Por área</a>
                    <a className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>Por origen de llamado</a>
                    <div className="inputGroup">
                        <input type="date" className="inputDate" />
                        <input type="date" className="inputDate" />
                    </div>
                    <a className="cleanFilters" onClick={() => handleLinkClick(false)}>Limpiar filtros</a>
                </div>
            </div>
        </div >
    );
}
