import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card';


const Userdtail = (props) => {
    const [users, setUsers] = useState({})
  
    const {id} =useParams();
    let amir = useParams();
    console.log("amir",amir);
    useEffect(() =>{
        axios.get(` https://thronesapi.com/api/v2/Characters/${id}`)
        .then(res => {
          const users = res.data;
          setUsers(users);
        })
    },[id])

 
    console.log(users);
    return (
        <div>
            <Card users={users} />        
        </div>
    )
}

export default Userdtail


