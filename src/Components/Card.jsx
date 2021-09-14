import React from 'react';
import {
    Link
  } from "react-router-dom";

const Card = (props) => {
    console.log(props);

    const {firstName,imageUrl,title,id} = props.user;
    return (
       <div className="card-wrapper">
            <div className="card">
                <img src={imageUrl} alt="" />
                <h2>{firstName}</h2>
                <Link to={`/userdetail/${id}`}>{title}</Link>
            </div>
       </div>
    )
}

export default Card
