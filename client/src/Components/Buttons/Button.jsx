import './Button.css'
export default function Button({ text, onClick, type }) {
    return (
        <div className='buttonWrapper'>
            <button className="button" type={type} onClick={onClick}>{text}</button>
        </div>
    );
}
