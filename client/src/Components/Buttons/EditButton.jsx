import './Button.css'
import { PencilSquareIcon } from '@heroicons/react/24/solid';

export default function EditButton({ text, onClick }) {
    return (
        <div>
            <button className="editButton" onClick={onClick}><PencilSquareIcon style={{ width: '22px' }} /></button>
        </div>
    );
}
