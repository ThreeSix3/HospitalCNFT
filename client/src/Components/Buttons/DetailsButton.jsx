import './Button.css'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid';
export default function DetailsButton({ text, onClick }) {
    return (
        <div>
            <button className="detailsButton" onClick={onClick}><DocumentMagnifyingGlassIcon style={{ width: '22px' }} /></button>
        </div>
    );
}
