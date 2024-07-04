const box1={
  width:"500px",
  height:"400px",
  border:"4px solid red",
  borderRadius:"30px",
  backgroundColor:"yellow",
  
  

}
const box2={
  width:"300px",
  height:"200px",
  border:"4px solid blue",
  borderRadius:"30px",
  backgroundColor:"pink",
  margin:"40px",
  padding:"40px"

}
const box3={
  width:"150px",
  height:"70px",
  border:"4px solid green",
  borderRadius:"30px",
  backgroundColor:"skyblue",
  margin:"40px",
  padding:"40px"

}




const App=()=>{
  return(
    <>
    <div style={{textAlign:"center",padding:"10%",margin:"12%"}}>
        <div style={box1} >
        
        <div style={box2} >
        
        <div style={box3}> 
        <h1>cybrom</h1>
        </div>
        </div>
        </div>
        </div>


    </>
  )
}
export
default App;