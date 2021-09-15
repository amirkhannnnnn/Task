import React from 'react';
import {
    Link
  } from "react-router-dom";

const Card = (props) => {
  

    const {firstName,imageUrl,title,id} = props.users;
    return (
       <div className="card-wrapper">
            <div className="card">
                <img src={imageUrl} alt="" />
                <h3>FirstName: {firstName}</h3>
                <Link to={`/userdetail/${id}`}>{title}</Link>
            </div>
       </div>
    )
}

export default Card
