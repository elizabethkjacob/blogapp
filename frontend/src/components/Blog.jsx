import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from "@mui/material";
import UpdateBlog from './UpdateBlog'; 

import axiosInstance from '../axiosinterceptor';
import { Link, useNavigate } from 'react-router-dom';
const Blog = () => {
  const [selectedPostId, setSelectedPostId] = useState(null); 
  const [cardData, setCardData] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.get("/api/view")
      .then(res => {
        setCardData(res.data); 
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 
  const handleUpdate = (blogId) => {
    setSelectedPostId(blogId); 
  };
  

  const handleDelete = (blogId) => {
    axiosInstance.delete(`/api/posts/${blogId}`)
    .then(res=>{
      
     alert(res.data.message);
     setCardData(cardData.filter(blog =>blog._id !== blogId))
    })
    .catch(error=>{
      console.log(error);

    })
  };

  return (
    <div className='card'>
      <Grid container spacing={2} margin={5} >
        {cardData.map(blog => (
          <Grid item key={blog._id} xs={12} sm={4} md={3}>
            <Card sx={{ maxWidth: "370px", display: "flex", m: 4 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "190px" }}
                  component={"img"}
                  src={blog.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {blog.title}
                  </Typography>

                  <Typography variant="h6">{blog.description}</Typography>
                  <Typography variant="h6" gutterBottom component={"div"}>
                    {blog.post}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant='contained'component={Link} to={`/update/${blog._id}`} onClick={() => handleUpdate(blog._id)}>Update</Button>
                  <Button size="small" variant='contained' onClick={() => handleDelete(blog._id)}>Delete</Button>
                </CardActions>
              </CardActionArea>
            </Card>
            {selectedPostId === blog._id && <UpdateBlog postId={blog._id} />}

          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;





//const handleUpdate =()=>{
 
// console.log("update clicked",data);
  //setUpdate(update=true);
  //console.log(update)
 // navigate('/add',{state:{data,update}})
 //}
 //useEffect(()=>{
  //axiosInstance.get("http://localhost:3005/api/view").then((res)=>{
    //setCardData(...cardData,res.data)
 // })},[]);
 

