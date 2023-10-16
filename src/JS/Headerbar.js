import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
//import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Login from "./Login"; 
import Main from "./Main";
import  Contact from "./Contact";
import Home from "./Home";
import { Link, Route, Routes } from 'react-router-dom';
export  function Headerbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             SEVEN FIT
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.02 }}>
             <Link to="/Main">Main</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.02 }}>
             <Link to="/Login">Login</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.02 }}>
             <Link to="/Home">Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.02 }}>
             <Link to="/Contact">contact us</Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Routes>
         
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Home' element={<Home/>}/>
      
      </Routes>
    </Box>
    
  );
}
export default Headerbar