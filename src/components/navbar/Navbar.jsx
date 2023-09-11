// import React from 'react'

import { Box, Typography } from "@mui/material";

import "./navbar.css"
const Navbar = () => {
  return (
    <Box
      sx={{
        height: "50px",
        backgroundColor: "#003580",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1024px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        <Typography fontWeight={500}>VIETBOOKINGAPP</Typography>
        <div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </Box>
    </Box>
    // <div className='navbar'>
    //     <div className="navContainer">
    //         <span className="logo">VietBookingApp</span>

    //     </div>
    // </div>
  );
};

export default Navbar;
