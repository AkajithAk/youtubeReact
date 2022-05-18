import React, { useRef } from "react";

function LocalStorage(){
    const data=useRef();
    const handleClick=()=>{
        console.log(data.current.value,"initial value")
        localStorage.setItem("inputValue",data.current.value)
    }
    console.log(localStorage.getItem("inputValue"),"****")
    return(
        <>
            <input ref={data} />
            <button onClick={handleClick}>Add</button>
        </>
    );
}
export default LocalStorage;