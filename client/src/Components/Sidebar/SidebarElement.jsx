import './Sidebar.css';

export default function SidebarElement({ text, icon, isActive }) {
    return (
        <button className={`sidebarElement ${isActive ? 'active' : ''}`}>
            <span className='sidebarElementIcon'>{icon}</span>
            <p className='sidebarElementText'>{text}</p>
        </button>
    );
}
