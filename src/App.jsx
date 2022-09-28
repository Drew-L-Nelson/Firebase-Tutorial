import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export default function App() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    
    //async function practice
    //async sends back a promise
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getUsers();
    }, [])

    if (!users) return <div>Loading...</div>;
    
    return (
    <main>
        <input placeholder='First Name...'/>
        <input placeholder='Last Name...'/>
        <input type='number' placeholder='Age...'/>
        <button className='create-user-button'>Create User</button>
        
        {users.map((user) => { 
        return <div className='display-div'> 
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.age}</h1>
        </div>
    })};
    </main>
  )
}
