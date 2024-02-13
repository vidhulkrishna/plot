import { } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import './Plot.css'
import  { Home, MenuItem,Button, FormControl, InputLabel, Select, TextField  } from '@mui/material';
import Topbar from "../Adminpanel/Topbar";
import Sidebar from "../Adminpanel/Sidebar";

const Plot = () => {
    var[inputs,setInputs]=useState({
      "pname":'',
      "pprice":'',
      "plocation":'',
      "pcategory":'Plots'
      
    })
    var[selectedimage,setSelectedimage]=useState(null);
    
  
    const inpuHandler =(event) =>{
      const{name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
    }
  
    const savedata=()=>{
      const formdata=new FormData();
      formdata.append('pname',inputs.pname);
      formdata.append('pprice',inputs.pprice);
      formdata.append('plocation',inputs.plocation);
      formdata.append('pcategory',inputs.pcategory);
      formdata.append('pimage2',selectedimage)
      fetch('http://localhost:3005/pnew',
      {
          method:'post',
          body:formdata,
      })
      .then((response)=>response.json())
      .then((data)=>{
          alert("record saved")
      })
      .catch((err)=>{
          console.log("error")
      })
  }
  
    //   const addHandler=() =>{
    //     console.log("Clicked")
  
    //     console.log(inputs)
    //     axios.post("http://localhost:3005/new",inputs)
    //     .then((response)=>{
    //       alert("Record Saved")
    //     })
    //     .catch(err=>console.log(err))
        
    // }
  
    const handleimage =(event)=>{
      const file = event.target.files[0];
      setSelectedimage(file)
      inputs.image2=file;
      }
  
      
  
  
    return (
  
      <div>
        <Topbar/>
        <Sidebar/>
      <div className="addplot">
      <h2>Plot Details</h2>  
        <TextField label="Plot name" type="text" name="pname"value={inputs.pname} onChange={(event) => inpuHandler (event)}/> <br /><br />
        <TextField label="Price" type="text" name="pprice" value={inputs.pprice} onChange={(event) => inpuHandler (event)}/><br /><br />
        <TextField label="Location" type="text" name="plocation" value={inputs.plocation} onChange={(event) => inpuHandler (event)}/> <br /><br />
  
        <Select label="Category" name="pcategory" value={inputs.pcategory}onChange={inpuHandler}>
          <MenuItem value="Plots">Plots</MenuItem>
              <MenuItem value="Rentrooms">Rentrooms</MenuItem>
              <MenuItem value="Buildings">Buildngs</MenuItem>
        </Select><br /><br />
        <label>Upload file</label>
          <input type="file" onChange={handleimage}></input>
          <br /><br />
        
        <button className="addproduct-btn" onClick={()=>{savedata()}}>ADD</button>
      </div>
      </div>
    )
  }
  
  export default Plot


