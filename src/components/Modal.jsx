import './Modal.css';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function Modal({ closeModal, changeStyle }) {
    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <button 
                    onClick={() => {
                        closeModal(false)
                        changeStyle('Popup-main-div')
                    }}
                > X </button>
                
                <div className='title'>
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className='body'>
                    <p>The next page is awesome! You should move forward, you will enjoy it</p>
                </div>
                <div className='footer'>
                    <button
                        onClick={() => {
                        closeModal(false)
                        changeStyle('Popup-main-div')
                    }}    
                    >Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}