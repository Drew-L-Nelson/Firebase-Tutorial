import './Popup.css';
import Modal from './Modal'

export default function Popup() {
    return(
        <div className='Popup-main-div'>
            <h1>Click on the button to open modal</h1>
            <button className='open-modal-button'>Open</button>
            {/* Modal import, hopefully opens on screen and not just within Popup window */}
            <Modal/>
        </div>
    )
}