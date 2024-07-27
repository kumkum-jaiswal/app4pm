import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Insert = () => {

    const [input,setinput]=useState({});
    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setinput(values=>({...values, [name]:value}))


    }
    const handle=()=>{
        let api="http://localhost:3000/student";
        axios.post(api, input).then((res)=>{
            alert("data save")
        })
    }
    return ( 
        <>
             <Form style={{width:"500px",  margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter rollno</Form.Label>
        <Form.Control type="text" placeholder="Enter rollno" name="rollno" 
            value={input.rollno} onChange={handleinput}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" placeholder="enter name" name="name" 
            value={input.name} onChange={handleinput}/>
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" placeholder="enter city"  name="city" 
            value={input.city} onChange={handleinput}/>
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter fees</Form.Label>
        <Form.Control type="text" placeholder="enter fees" name="fees" 
            value={input.fees} onChange={handleinput}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handle}>
        Submit
      </Button>
    </Form>
        </>
     );
}
 
export default Insert;