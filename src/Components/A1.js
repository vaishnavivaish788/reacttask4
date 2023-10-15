import React, { useEffect, useState } from 'react';
import axios from 'axios';
const A1 = () => {
const [users, setUsers] = useState([]);
useEffect(() => {
    axios.get('https://dummyjson.com/users')
        .then(response => {
        setUsers(response.data.users);
        })
        .catch(error => {
        console.error('Error fetching user data:', error);
    });
}, []);
return (
    <div>
    <h1>User Records</h1>
    <table className='box'>
        <thead>
        <tr>
            <th>S.No</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>UserName</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
        </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td><img src={user.image} style={{height:'40px',width:'40px'}} /></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
);
};

export default A1;