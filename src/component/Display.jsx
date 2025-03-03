import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const Display = () => {
    const [mydata,setMydata]=useState([])

    const loadData=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData()
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })
    return ( 
        <>
            <h1>display page</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>city</th>
          <th>fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
     );
} 
export default Display;