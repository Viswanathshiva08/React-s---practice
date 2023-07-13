import React from "react";
import {FaTimes} from 'react-icons/fa';

const User = ({user,onDelete}) =>{
    return (
        <div className={"event"}>
        <h5>
            {user.name} {''}

            <FaTimes
            style={{color:'red',cursor:'pointer'}}  
            onClick={()=>onDelete(user.name)}/>

        </h5>
        <p>{user.password}</p>
        </div>
    )
}

export default User