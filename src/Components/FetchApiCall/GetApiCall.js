import React, { useEffect, useState } from "react";

function GetApiCall(){
    const [data,setData]=useState([])
    useEffect(()=>fetch("https://reqres.in/api/products/3").then(data=>data.json()).then(result=>setData(result.support)))
    return (
        <div>
            <h1>GET Api</h1>
            <h1>{data.text}</h1>
            <h1>{data.url}</h1>
        </div>
    );
}
export default GetApiCall;