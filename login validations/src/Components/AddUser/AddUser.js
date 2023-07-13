import React from "react";
import { useState } from "react";

const AddUser = ({onAdd})=>{
    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const[passw, setPassw] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!name || !email || !passw){
            alert('please enter all fields')
            return
        }
         onAdd({name,email,passw})
         setName('')
         setEmail('')
         setPassw('')
    }
   return(
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Name</label>
            <input type= "text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Password</label>
            <input type="password" placeholder="Password" value={passw} onChange={(e)=>setPassw(e.target.value)}/>
        </div>
        <input type='submit' value='Sign Up' className="btn btn-block"/>
       
    </form>
   )
}

export default AddUser