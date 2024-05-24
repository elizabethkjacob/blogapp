import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosInstance from '../axiosinterceptor';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBlog = () => {
  const [post, setPost] = useState({});
  const { blogId } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`http://localhost:3005/api/posts/${blogId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [blogId]);

  const inputHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateData = () => {
    axiosInstance.put(`http://localhost:3005/api/posts/${blogId}`, post) 
      .then((res) => {
        alert(res.data.message);
        navigate('/blogs'); 
      })
      .catch(error => {
        console.error('Error updating post:', error);
      });
  };

  return (
    <div style={{ margin: "5%" }}>
      <TextField
        fullWidth
        variant='outlined'
        label="Post Title"
        name="title"
        value={post.title || ''}
        onChange={inputHandler}
      />
      <br /><br />
      <TextField
        fullWidth
        multiline
        rows={10}
        variant='outlined'
        label="Type a post"
        name="post"
        value={post.post || ''}
        onChange={inputHandler}
      />
      <br /><br />
      <TextField
        fullWidth
        variant='outlined'
        label="Image URL"
        name="image"
        value={post.image || ''}
        onChange={inputHandler}
      />
      <br /><br />
      <Button
        variant='contained'
        color='primary'
        onClick={updateData}
      >
        Update
      </Button>
    </div>
  );
};

export default UpdateBlog;
