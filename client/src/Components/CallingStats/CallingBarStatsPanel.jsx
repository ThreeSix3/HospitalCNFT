import DefaultCard from "../Cards/DefaultCard";
export default function CallingBarStatsPanel({ title, children }) {
    return (
        <div>
            <DefaultCard title={title} children={children} />
        </div>
    );
}
