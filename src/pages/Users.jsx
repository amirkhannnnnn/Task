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
            
            <ul>
                {users.map((user) =>(
                   <Card  user={user} key={user.id}/>
     
                ))}
            </ul>
        </div>
    )
}

export default Users