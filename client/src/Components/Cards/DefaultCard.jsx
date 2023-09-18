import './Card.css'
export default function DefaultCard({ children, title }) {
    return (
        <div className='defaultCard'>
            <h3>{title}</h3>
            {children}
        </div>
    );
}
