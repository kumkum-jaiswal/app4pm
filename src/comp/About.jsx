import { useState } from "react";

const About = () => {
    const [cnt,setcnt]=useState(0)
    return ( 
        <>
        <h1>counter:{cnt}</h1>
        <button onClick={()=>{setcnt(cnt+15)}}>increment</button>
        <button onClick={()=>{setcnt(cnt-15)}}>decrement</button>

        </>
     );
}
 
export default About;