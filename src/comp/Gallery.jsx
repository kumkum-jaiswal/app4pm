import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Gallery = () => {
    const[mydata,setmydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/emp";
        axios.get(url).then((res)=>{
            setmydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.name}</td>
                    <td>{key.designation}</td>
                    <td>{key.department}</td>
                    <td>{key.salary}</td>
                </tr>
            </>
        )
    })

    return ( 
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          
          <th> Name</th>
          <th>designation</th>
          <th>department</th>
          <th>basic_salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
            
        </>
     );
}
export default Gallery;