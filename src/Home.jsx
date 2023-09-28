import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
import { useDispatch } from 'react-redux';
function Home() {
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.users)
  return (
   <div className="container">
    <h2>Card App with JSON Server</h2>
    <Link to= "/create" className='btn btn-success my-3'>Create</Link>
    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
{users&&users.map((user)=>{return(<><tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td className='flex justify-between'><Link to={`/update/${user.id}`} className='btn btn-info'>edit</Link><button onClick={()=>{dispatch(deleteUser(user.id))}} className='btn btn-error'>delete</button></td></tr></>)})}
        </tbody>
    </table>
   </div>
  )
}

export default Home