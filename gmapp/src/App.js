import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";


import CrudOp from './Components/CrudOp';
import LocationsInput from './Components/LocationsInput'
import MapGm from './Components/MapGm'
import AddLocation from './Components/AddLocation'
import Google_map from './Components/Google_map';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
function App() {
  const [tag, setTag] = useState([]);
  const handleTagChange = (value) => {
    setTag(value);
  };
  console.log(`Screen width: ${window.innerWidth}px`);
  console.log(`Screen height: ${window.innerHeight}px`);

  return (
    
      <Container>
      
      <Grid container spacing={2} sx={{padding:2}}>
            <Grid xs={4}>hii</Grid>
            <Grid xs={8}>
              <Google_map/>
            </Grid>
        
            <Grid xs={4}>
         
              <Stack spacing={2}>
                <LocationsInput/>
                <AddLocation onTagsChange={handleTagChange}/>
                {tag.map((e)=>(
                  <li>{e}</li>

                ))}
              </Stack>
        
            </Grid>
        
      </Grid>
   
     </Container>


    
      
      
    
  );
}

export default App;
