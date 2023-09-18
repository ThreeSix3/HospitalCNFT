import './Button.css'
export default function MenuButton({ text, onClick }) {
    return (
        <div className='buttonWrapper'>
            <button className="menuButton" onClick={onClick}>{text}</button>
        </div>
    );
}
