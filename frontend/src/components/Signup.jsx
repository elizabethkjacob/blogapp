import { Grid,Item, TextField,Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const navigate = useNavigate();
  const [users,setUsers] = useState();
   const  inputHandler  = (e)=>{
    setUsers({ ...users,[e.target.name]:e.target.value})
    console.log((users));
   };
   const addHandler = ()=>{
    console.log("clicked",users);
    axios.post("/api",users)
    .then((res)=>{
      console.log(res);
      alert(res.data.message);
      navigate('/')
    })
   .catch((err)=>{
    console.log(err)
   })
   }
  return (
    <div style={{margin:'10% 20% 10% 10%'}}>
        <Grid container spacing={2}>
    <Grid item xs={6}>
      <TextField fullWidth label='Name'
      name='Name'
      onChange={inputHandler}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField fullWidth label='Email'
      name='Email'
      onChange={inputHandler}

      />
    </Grid>
    <Grid item xs={12}>
    <TextField fullWidth label='Address'multiline 
         rows={4}
         name='Address'
         onChange={inputHandler}
     />

    </Grid>
    <Grid item xs={6}>
    <TextField fullWidth label='Username'
     name='Username'
     onChange={inputHandler}
    />

    </Grid>
    <Grid item xs={6}>
    <TextField fullWidth label='Password'
     name='Password'
     type='password'
     onChange={inputHandler}
     />

    </Grid>
  </Grid>
  <br />
  <br />
  <Button variant="contained"  color='secondary'onClick={addHandler}>Signup</Button>
  <br /> <br />
  <Grid item xs={12} >
    <Typography>
      <Link to={'/'}  style={{ textDecoration: 'none',color:'blue'}}>
        Back to Login
      </Link>
    </Typography>
  </Grid>
  </div>
  )}

export default Signup