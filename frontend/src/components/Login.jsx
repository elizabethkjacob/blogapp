import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Typography } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState();
   const  inputHandler  = (e)=>{
    setUser({ ...user,[e.target.name]:e.target.value})
    console.log((user));
   };
  const addHandler = ()=>{
    console.log(user);
    axios.post("/api/login",user)
    .then((res)=>{
     alert(res.data.message);
     //console.log(res.data.token); 
     sessionStorage.setItem('userToken',res.data.token);
     navigate('/blogs')
    })
    .catch((err)=>{
    console.log(err);
    })
  }
  return (
    <div>

         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{margin:'10% 20% 30% 40%'}}
    >
        <Typography variant='h5' style={{color:'darkblue'}}>Blog app login</Typography>
        <div>
        <TextField
          
          id="outlined-required"
          label="Username"
          name='Username'
          onChange={inputHandler}
       />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="Password"
          name='Password'
          type='password'
          onChange={inputHandler}
        />  
        </div><br />
        <Button variant="contained" style={{alignItems:'center'}}
        onClick={addHandler}
        >Login</Button>
        <br /><br /><br />
        <Typography>
          <Link to={'/sign'}>
          New Users Click here
          </Link>
        </Typography>
    </Box>
    </div>
  )
}

export default Login