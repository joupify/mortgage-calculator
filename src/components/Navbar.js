import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    <div>

      <AppBar position="static">
        <Toolbar>
          <Container>
            <Typography variant="h5" component="div" >
              React Bank
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar