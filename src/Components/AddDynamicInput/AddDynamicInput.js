import React, { useState } from "react";
function AddDynamicInput(){
   const [val,setVal]=useState([]);
   const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }
   console.log(val,"data-")
return(
    <>
    <button onClick={()=>handleAdd()}>Add</button>
        {val.map((data,i)=>{
            return(
               <div>
                    <input value={data} onChange={e=>handleChange(e,i)} />
                    <button onClick={()=>handleDelete(i)}>x</button>
               </div>
            )
        })}
    </>
);
}
export default AddDynamicInput;