import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [mydata,setmydata]=useState([]);
    const myNav=useNavigate();

    const loadData=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            // console.log(res.data);
            setmydata(res.data);
        })

    }
    useEffect(()=>{
        loadData();
    },[])

    const mydel=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`;
        axios.delete(url).then((res)=>{
            alert("record delete");
            loadData();

        })        
    }
    const myedit=(myid)=>{
        // alert(myid)
          myNav(`/myedit/${myid}`)

    }

    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <td>
                    <a href="#">
                       <img src="public/img/edit.jpg" width="50px" 
                        onClick={()=>{myedit(key.id)}}
                       />
                     </a>
                     <a href="#">
                       <img src="public/img/delete.jpg" width="50px" 
                       onClick={()=>{mydel(key.id)}}/> 
                       </a>
                    </td>
                    
                </tr>
            </>
        )
    })
    return ( 
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>city</th>
          <th>fees</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>


        </>
     );
}
 
export default Update;