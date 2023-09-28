
import { createSlice } from "@reduxjs/toolkit"
import { userList } from "./Data"
const userSlice=createSlice({
    name:"users",
    initialState:userList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        deleteUser:(state,action)=>{
       const id=action.payload
       const odam=state.find(f=>f.id==id)
       if(odam){
        return state.filter(f=>f.id!==id)
       }

            
        },
        updateUser:(state,action)=>{
            const {name,email,id}=action.payload
            const odam =state.find(user=>user.id==id)
            if(odam){
                odam.name=name
                odam.email=email
            }

                
        }
    }
})
export const {addUser,updateUser,deleteUser}=userSlice.actions
export default userSlice.reducer