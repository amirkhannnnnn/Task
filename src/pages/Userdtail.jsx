import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Userdtail = (props) => {
    const [users, setUsers] = useState({})
  
    const {id} =useParams();
    useEffect(() =>{
        axios.get(` https://thronesapi.com/api/v2/Characters/${id}`)
        .then(res => {
          const users = res.data;
          setUsers(users);
        })
    },[])

 
    console.log(users);
    return (
        <div>
            <img src={users.imageUrl} alt="" />
            <h1>{users.firstName}</h1>
            {id}
        </div>
    )
}

export default Userdtail


