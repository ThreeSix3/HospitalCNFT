import './Button.css'
import { TrashIcon } from '@heroicons/react/24/solid';
export default function DeleteButton({ text, onClick }) {
    return (
        <div>
            <button className="deleteButton" onClick={onClick}><TrashIcon style={{ width: '22px' }} /></button>
        </div>
    );
}
