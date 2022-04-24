import React, { useState } from "react";
import "./Form.css";
function Form(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length==0||lastName.length==0){
            setError(true)
        }
        if(firstName&&lastName)
        {
        console.log("First Name: ",firstName,"\nLast Name: ",lastName)
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <div>
                   <input placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
               </div>
               {error&&firstName.length<=0?
               <label>First Name can't be Empty</label>:""}
               <div>
                   <input placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
               </div>
               {error&&lastName.length<=0?
               <label>Last Name can't be Empty</label>:""}
               <div>
                   <button>
                       Submit
                   </button>
               </div>
           </form>
        </>
    );
}
export default Form;