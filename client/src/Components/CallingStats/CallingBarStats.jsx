import { Chart } from "react-google-charts";

export default function CallingBarStats({ data }) {
    const dataOld = [
        ["Tipo de llamado", "Cantidad"],
        ["Normales", 500],
        ["Normales", 500],
        ["Emergencia", 700],
        ["Emergencia", 700],
    ];

    const dataNew = [
        ["Estado", "Cantidad"],
        ["Normales Atendido", 250],
        ["Normales No atendido", 250],
        ["Emergencia Atendido", 600],
        ["Emergencia No atendido", 100],

    ];

    const diffdata = {
        old: dataOld,
        new: dataNew,
    };

    return (
        <div style={{ width: '100%' }}>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="800px"
                diffdata={diffdata}
            />
        </div>

    );
}
