import { useState } from "react";

const Home = () => {
    const [cnt,setcnt]=useState(0)
    return ( 
        <>
           <h1>cout:{cnt}</h1>
           <button onClick={(e)=>{setcnt(cnt+1)}}>increment</button>
           <button onClick={(e)=>{setcnt(cnt-1)}}>decrement</button>
           <button onClick={(e)=>{setcnt(0)}}>rest</button>
        </>
     )
}
 
export default Home;