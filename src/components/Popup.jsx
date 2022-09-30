import './Popup.css';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function Popup() {
    return(
        <div className='main-div'>
            <h1>Wassabi</h1>
        </div>
    )
}