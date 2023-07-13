import{useState} from 'react';
import'./App.css';
import Header from './Components/Header/Header';
import Users from './Components/Users/Users';
import AddUser from './Components/AddUser/AddUser';





function App() { 
const [users,setUsers] =useState([
  {
    id:1,
    name:'viswanath',
    email:'viswanath08@gmail.com',
    passw:'viswanath08'
  },
  {
    id:2,
    name:'shiva',
    email:'shiva08@gamil.com',
    passw:'shiva'
  },
])

const addUser = (user) => {
  const id = Math.floor(Math.random()*1000)+1;
  const newUser = {id, ...user};
  setUsers([...users,newUser]);
} 

const deleteUser = (name)=>{
  setUsers(users.filter((user)=> user.name !==name))
}

return (
  <div className='container'>
    <Header/>
    <AddUser onAdd = {addUser}/>

    {users.length>0?
    <Users users ={users} onDelete = {deleteUser} />
    :('No users to display')}

  </div>
);
  
}

export default App;
