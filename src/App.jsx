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
        {users.map((user) => { 
        return <div className='display-div'> 
            <h1>First Name: {user.firstName}</h1>
            <h1>Last Name: {user.lastName}</h1>
            <h1>Age: {user.age}</h1>
            <h1>ID: {user.id}</h1>
            <break></break>
        </div>
    })};
    </main>
  )
}
