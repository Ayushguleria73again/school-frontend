import { useState } from "react"

function Mailer() {
    const [state,setstate]= useState({})
    const handelvalue = (e)=>{
        setstate({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const submitvalue = async (e)=>{
        e.preventDefault()
        await fetch("http://localhost:8000/api/email",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(state)
        })
        
    }
  return (

    <>
    <form >
        <input type="text" name="name"  onChange={handelvalue} placeholder="name"/>
        <input type="text" name="subject" onChange={handelvalue} placeholder="subject"/>
        <input type="email" name="email"  onChange={handelvalue} placeholder="email"/>
        <textarea name="message" id="" onChange={handelvalue} placeholder="message"></textarea>
        <button onClick={submitvalue}>click</button>

    </form>
    </>
  )
}

export default Mailer