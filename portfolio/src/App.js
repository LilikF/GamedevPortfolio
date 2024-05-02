import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AboutMe from './Components/Sections/AboutMe/AboutMe';
import './index.css'
import SampleWork from './Components/Sections/SampleWork/SampleWork';
import { Grid } from '@mui/material';
import Unity from './Components/Sections/Unity/Unity';
import Godot from './Components/Sections/Godot/Godot';
import Constructopia from './Components/Sections/Constructopia/Constructopia';
import Puli from './Components/Sections/Puli/Puli';
import Closing from './Components/Sections/Closing/Closing';

function App() {

  const drawerWidth = 240;

  return (
    <div className="App" style={{color:'white'}}>
      <Sidebar drawerWidth={drawerWidth}>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, backgroundColor:'#12253bed', minHeight:'100vh' } }}
        >
          <Toolbar />
          <Grid container gap={'32px'}>
            <AboutMe/>
            <div className='divider'></div>
            <Unity/>
            <div className='divider'></div>
            <Godot/>
            <Constructopia/>
            <Puli/>
            <div className='divider'></div>
            <Closing/>
          </Grid>
        </Box>
      </Sidebar>
    </div>
  );
}

export default App;
