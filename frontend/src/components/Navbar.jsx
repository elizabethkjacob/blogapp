import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const tokenrelease=()=>{
    sessionStorage.removeItem('userToken');
  }
  return (
    <div>
         <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'purple'}} position="static">
           <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Link to='/blogs' style={{ textDecoration: 'none',color:'white' }}>
            <Button color="inherit">Blogs</Button>
          </Link>
         <Link to='/add' style={{ textDecoration: 'none',color:'white' }}>
           <Button color="inherit">Add Blog</Button>
        </Link>
        <Link to='/' style={{ textDecoration: 'none',color:'white' }}>
           <Button color="inherit" onClick={tokenrelease}>Logout</Button>
        </Link>

          </Toolbar>
        </AppBar>
    </Box>
    </div>
  )
}

export default Navbar