import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AboutMe from './Components/Sections/AboutMe/AboutMe';

function App() {

  const drawerWidth = 240;

  return (
    <div className="App">
      <Sidebar drawerWidth={drawerWidth}>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, backgroundColor:'#12253bed', minHeight:'100vh' } }}
        >
          <Toolbar />
          <AboutMe/>
        </Box>
      </Sidebar>
    </div>
  );
}

export default App;
