import React, { useState } from 'react'
import axios from "axios"

export default function UserData() {
    const [searchedUser,setSeachedUser]=useState()
    const [user,setUser]=useState(
      {  fname:"",
        lname:"",
        email:"",
        phone:""
    
    }
    )
    
    const [data,setData]=useState([])

const abc=(key,value)=>{
    const d={...user,[key]:value}
    setUser(d)
}
const addUser=()=>{
    const list=[...data]
    list.push(user)
    setData(list)
}
const showUser=()=>{console.log("hello") }
const updateUser=()=>{}
const deleteUser=()=>{}

  return (
      <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{border:"solid" ,width:"300px",height:"200px",marginTop:"32px"
    }}>
        <div>   Name:<input value={user.fname} onChange={(e)=>abc("fname",e.target.value)}/>
</div>
  <div> Lname:<input value={user.lname} onChange={(e)=>abc("lname",e.target.value)}/></div>
  <div> email:<input value={user.email} onChange={(e)=>abc("email",e.target.value)}/></div>
  <div> phone:<input value={user.phone} onChange={(e)=>abc("phone",e.target.value)}/></div>
   <button onClick={addUser}>submit</button>
   <table style={{border:"solid"}}>
    <tr colspan={5}><th>userList</th></tr>
{
    data?.map((el)=>{
        return <tr>
            <td>{el.fname}</td>
            <td>{el.lname}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
            <td><button>delete</button></td>
        </tr>
    })
}
</table>

   </div>

  
  
   <div  style={{ width:"300px",height:"200px",border:"solid",display:"flex",flexDirection:"column",gap:"32px",marginTop:"32px"}}>
   <div 
    >search user
<input value={searchedUser} onChange={(e)=>searchedUser(e.target.value)}/>
<button onClick={showUser}>show</button></div>

       <table style={{border:"solid"}}>
           <tr colspan={5}><th>userDetails</th></tr>
       {
           data?.map((el)=>{
               return <tr>
                   <td>{el.fname}</td>
                   <td>{el.lname}</td>
                   <td>{el.email}</td>
                   <td>{el.phone}</td>
                   <td><button>delete</button></td>
               </tr>
           })
       }
       </table>
      
     
   </div>


    
    </div>
  )
}
