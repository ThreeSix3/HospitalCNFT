import './Button.css'
export default function Button({ text, onClick }) {
    return (
        <div className='buttonWrapper'>
            <button className="button" onClick={onClick}>{text}</button>
        </div>
    );
}
