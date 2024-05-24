import React, { useState } from 'react'
import TextField from '@mui/material/TextField'; 
import { Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';
import axios from 'axios';
const AddBlog = () => {
  const [post, setPost] = useState();
  const navigate = useNavigate();

  const inputHandler = (e)=>{
    setPost({ ...post, [e.target.name]: e.target.value });

  }

  const addData = ()=>{
    console.log(post)
    axiosInstance.post("/api/add", post)
    .then((res)=>{
      alert(res.data.message);
      navigate('/blogs'); 
    })
  }
  return (
    <div style={{margin:"5%"}}>
      <TextField 
      fullWidth
      variant='outlined'
      label="post title"
      name="title"
      onChange={inputHandler}
      />
      <br /><br />
      <TextField 
      fullWidth
      multiline
      rows={10}
      variant='outlined'
      label="Type a post "
      name="post"
      onChange={inputHandler}
      />
      <br /><br />
      <TextField 
      fullWidth
    
      variant='outlined'
      label="Image URL "
      name="image"
      onChange={inputHandler}
      />
      <br /><br />
      <Button
      variant='contained'
      color='secondary'
      onClick={addData}
      >
        Submit
      </Button>
      
    </div>
  )
}

export default AddBlog