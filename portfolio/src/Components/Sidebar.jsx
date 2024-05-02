import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import Toolbar from '@mui/material/Toolbar';

const Sidebar=(props)=>{
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const section_a = [
    {title: 'About Me', id: 'about-me'},
    {title: 'Sample Work', id: 'sample-work'},
    {title: 'Motivation', id: 'motivation'},
  ]

  const section_b = [
    {title: 'Experience in Unity', id: 'unity'},
    {title: 'Experience in Godot', id: 'godot'},
    {title: 'In-Editor Dynamic Screenshot Tool', id: 'dynamic-screenshot'},
    {title: 'Scene optimization tool', id: 'scene-optimization'},
    {title: 'Orthogonal screenshot tool', id: 'orthogonal-screenshot'},
  ]

  const section_c = [
    {title: 'Why choose me?', id: 'closing'},
  ]

  const drawer = (
    <div>
      <Divider />
      <List>
        {section_a.map((data, index) => (
          <ListItem key={data.title} disablePadding>
            <ListItemButton href={`#${data.id}`}>
              <ListItemText primary={data.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {section_b.map((data, index) => (
          <ListItem key={data.title} disablePadding>
            <ListItemButton href={`#${data.id}`}>
              <ListItemText primary={data.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {section_c.map((data, index) => (
          <ListItem key={data.title} disablePadding>
            <ListItemButton href={`#${data.id}`}>
              <ListItemText primary={data.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${props.drawerWidth}px)` },
          ml: { sm: `${props.drawerWidth}px` },
        }}
      >
        <Toolbar sx={{backgroundColor:'#12253bed!important'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {props.children}
    </Box>
  );
}

export default Sidebar