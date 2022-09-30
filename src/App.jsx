import './App.css';
import Popup from './components/Popup';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function App() {
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    
    const createUser = async () => {
        await addDoc(usersCollectionRef, 
            { firstName: newFirstName, lastName: newLastName, age: Number(newAge) }
        )};

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id)
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields)
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
    }
    
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getUsers();
    }, []);

    if (!users) return <div>Loading...</div>;
    
    return (
    <main>
        <input 
            onChange={(event) => {setNewFirstName(event.target.value)}}
            placeholder='First Name...'
        />
        <input 
            onChange={(event) => {setNewLastName(event.target.value)}}
            placeholder='Last Name...'
        />
        <input 
            onChange={(event) => {setNewAge(event.target.value)}}
            type='number' 
            placeholder='Age...'
        />
        <button 
            onClick={createUser}
            className='create-user-button'
        >
            Create User
        </button>
        
        {users.map((user) => { 
        return <div className='display-div'> 

            <div className='user-info-display-div'>
                <h1>{user.firstName}</h1>
                <h1>{user.lastName}</h1>
                <h1>{user.age}</h1>
            </div>
            <div className='button-div'>
                <button 
                    className='edit-user-button'
                    onClick={() => {updateUser(user.id, user.age)}}
                >Edit User</button>
                <button 
                    className='delete-user-button'
                    onClick={() => {deleteUser(user.id)}}
                >Delete User</button>
            </div>
        </div>
    })}

        <div>
            <Popup/>
        </div>
    </main>
  )
}
