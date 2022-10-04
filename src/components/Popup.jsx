import './Popup.css';
import Modal from './Modal';
import { useState } from 'react';

export default function Popup() {
    const [openModal, setOpenModal] = useState(false);
    const [style, setStyle] = useState('Popup-main-div');

    const changeStyle = () => {
    setStyle('Popup-main-div-2');
  };
    
    return(
        <div className={style}>
            <h1>Click on the button to open modal</h1>
            <button 
                className='open-modal-button'
                onClick={() => {
                    setOpenModal(true)
                    changeStyle()
                }}
            >Open</button>
            {/* Modal import, hopefully opens on screen and not just within Popup window */}
            {openModal && <Modal/>}
        </div>
    )
}