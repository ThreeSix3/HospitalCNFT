import DocsButton from '../../Buttons/DocsButton';
import './DocsPanel.css'
export default function DocsPanel() {
    return (
        <div className='docsCard'>
            <h3 className='docsTitle'>¿Necesitas ayuda?</h3>
            <p className='docsText'>Mira nuestra documentacion</p>
            <DocsButton text={'Documentacion'} />
        </div>
    );
}
