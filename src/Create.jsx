import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Create() {
    const navigate=useNavigate()
    const users=useSelector((state)=>state.users)
     const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const dispatch=useDispatch()
    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(addUser({key:users[users.length-1].id+1,id:users[users.length-1].id+1,name,email}))
        console.log(users);
        navigate('/')


    }
    
  return (
    <div className='flex w-[90%] h-[100vh] justify-center items-center  align-middle'>
        <div className='w-8/12 border bg-slate-600 p5 text-center'>
            <h3 className='text-white text-3xl'>Create user</h3>
            <form onSubmit={handleSubmit}  className='form-control p-8 flex flex-col gap-4'>
                <div className='mx-auto w-4/5 flex'>
                    <label htmlFor="name" className='label w-1/5 text-white'>Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" name='name' className='w-4/5 form-control' placeholder='Ismingiz kiriting' />
                </div>
                <div className='mx-auto w-4/5 flex'>
                <label htmlFor="email" className='label w-1/5 text-white'>Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' className='w-4/5 form-control' placeholder='emailingiz kiriting' />
                </div><br />
                <button className='btn btn-info '>Create</button>
            </form>

        </div>
    </div>
  )
}

export default Create