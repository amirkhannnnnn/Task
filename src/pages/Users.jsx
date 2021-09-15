import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Components/Card';


const Users = () => {
   
    const [ users , setUsers] = useState([])


    useEffect(() =>{
        axios.get(` https://thronesapi.com/api/v2/Characters`)
        .then(res => {
          const users = res.data;
          setUsers([...users]);
        })
    },[])
    return (
        <div>
            
            <div className="list">
                {users.map((user) =>(
                   <Card  users={user} key={user.id}/>
     
                ))}
            </div>
        </div>
    )
}

export default Users