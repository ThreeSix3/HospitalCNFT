import './filters.css'
import DefaultCard from "../Cards/DefaultCard";
export default function StatsPanel({ title, children }) {
    return (
        <div className="columnChart">
            <DefaultCard title={title} children={children} />
        </div>
    );
}
