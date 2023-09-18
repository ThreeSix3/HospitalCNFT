import './Button.css'
export default function DocsButton({ text, onClick }) {
    return (
        <div className='buttonWrapper'>
            <button className="docsButton" onClick={onClick}>{text}</button>
        </div>
    );
}
