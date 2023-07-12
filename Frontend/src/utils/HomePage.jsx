import React, { useEffect, useState } from 'react'
import axios from 'axios';



const HomePage = () => {
          const[userdata,setUserdata]=useState([]);

  useEffect(()=>{
           axios.get("https://jsonplaceholder.typicode.com/users")
           .then((res)=>{
            console.log(res)
            setUserdata(res.data);
           })
  },[]);

  return (
    <div>
            {userdata.map((data)=>{
                  return(
                    <h1>{data.name}</h1>
                  ) 
             })}
            
    </div>
  )
}

export default HomePage
