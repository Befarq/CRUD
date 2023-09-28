import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./UserReducer"

function Update() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
  const users=useSelector((state)=>state.users)
  const existingUser=users.filter(f=>f.id==id)
  const {name,email}=existingUser[0]
  const[uname,setName]=useState(name)
  const [uemail,setEmail]=useState(email)
  const handleUpdate=(event)=>{
    event.preventDefault();
    dispatch(updateUser({name:uname,email:uemail,id:id}))
    navigate('/')
  }


  return (
    <div className='flex w-[90%] h-[100vh] justify-center items-center  align-middle'>
        <div className='w-8/12 border bg-slate-600 p5 text-center'>
          <h3 className='text-white text-3xl'>Update User</h3>
            <form  onSubmit={handleUpdate} className='form-control p-8 flex flex-col gap-4'>
                <div className='mx-auto w-4/5 flex'>
                    <label htmlFor="name" className='label w-1/5 text-white'>Name:</label>
                    <input onChange={e=>setName(e.target.value)} type="text" name='name' className='w-4/5 form-control' placeholder='Ismingiz kiriting' value={uname} />
                </div>
                <div className='mx-auto w-4/5 flex'>
                <label htmlFor="email" className='label w-1/5 text-white'>Email:</label>
                    <input onChange={e=>setEmail(e.target.value)} type="email" name='email' className='w-4/5 form-control' placeholder='emailingiz kiriting' value={uemail}/>
                </div><br />
                <button  type="submit" className='btn btn-info '>Assign</button>
            </form>

        </div>
    </div>
  )
  }

export default Update