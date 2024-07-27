import axios from "axios";
import { useState } from "react";

const Placement = () => {
    const [input,setinput]=useState({});
    const handle=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinput((values)=>({...values, [name]:value}))
    }
    const handlesubmit=()=>{
        let url="http://localhost:3000/emp";
        axios.post(url,input).then((res)=>{
            alert("data save")
        })
    }
    return ( 
        <>
            Enter name
            <input type="text" name="name" value={input.name} onChange={handle}/>
            <br/>
            Enter designation
            <input type="text" name="designation" value={input.designation} onChange={handle}/>
            <br/>
            Enter department
             <input type="text" name="department" value={input.department} onChange={handle}/>
             <br/>
            Enter basic_salary
            <input type="text" name="salary" value={input.basic_salary} onChange={handle}/>
            <br/>
           <button onClick={handlesubmit}>submit</button>
        </>
     );
}
 
export default Placement;