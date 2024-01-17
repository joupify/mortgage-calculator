import { useState } from 'react';

import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Result from './components/Result';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';

function App() {


const [data, SetData] = useState({

  homeValue: 3000,
  downPayment: 3000,
  loanPayment: 3000,
  loanTerm: 5


})







  return (
    <div className="App">
     

      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect data= {data} SetData= {SetData}/>
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result  />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
