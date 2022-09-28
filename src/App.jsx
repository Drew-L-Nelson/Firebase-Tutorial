import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function App() {
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    
    const createUser = async () => {
        await addDoc(usersCollectionRef, 
            { firstName: newFirstName, lastName: newLastName, age: newAge }
        )};
    
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
            onChange={(event) => {setNewFirstName(event.target.value);}}
            placeholder='First Name...'
        />
        <input 
            onChange={(event) => {setNewLastName(event.target.value);}}
            placeholder='Last Name...'
        />
        <input 
            onChange={(event) => {setNewAge(event.target.value);}}
            type='number' 
            placeholder='Age...'
        />
        <button 
            onClick={createUser}
            className='create-user-button'>Create User
        </button>
        
        {users.map((user) => { 
        return <div className='display-div'> 
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.age}</h1>
        </div>
    })}
    </main>
  )
}
