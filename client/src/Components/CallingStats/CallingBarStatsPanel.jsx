import './filters.css'
import DefaultCard from "../Cards/DefaultCard";
export default function CallingBarStatsPanel({ title, children }) {
    return (
        <div className="columnChart">
            <DefaultCard title={title} children={children} />
        </div>
    );
}
