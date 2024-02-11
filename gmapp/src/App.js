import logo from './logo.svg';
import './App.css';
import CrudOp from './Components/CrudOp';
import LocationsInput from './Components/LocationsInput'
import MapGm from './Components/MapGm'
import Google_map from './Components/Google_map';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
function App() {

  console.log(`Screen width: ${window.innerWidth}px`);
  console.log(`Screen height: ${window.innerHeight}px`);

  return (
    
      <Container>
      
      <Grid container spacing={2} sx={{padding:2}}>
        <Grid xs={4}>
        <LocationsInput/>
        </Grid>
        <Grid xs={8}>
        <Google_map/>
        </Grid>
        
      </Grid>
   
     </Container>


    
      
      
    
  );
}

export default App;
