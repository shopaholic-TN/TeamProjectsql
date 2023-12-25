import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const AdminSpace=()=> {

const navigate=useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{backgroundColor:"black"}}>
          <Typography variant="h6" noWrap component="div">
            ADMIN DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
         
            <ListItem  disablePadding onClick={()=>navigate("/user")} >
              <ListItemButton>
                <ListItemIcon>
               <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="list of registered" />
              </ListItemButton>
            </ListItem>
        </List>

        <List>
         
         <ListItem  disablePadding onClick={()=>navigate("/seller")}>
           <ListItemButton>
             <ListItemIcon>
            <StorefrontIcon />
             </ListItemIcon>
             <ListItemText primary="list of seller" />
           </ListItemButton>
         </ListItem>
     </List>

     <List>
         
         <ListItem  disablePadding onClick={()=>navigate("/product")}>
           <ListItemButton>
             <ListItemIcon>
            <ProductionQuantityLimitsIcon />
             </ListItemIcon>
             <ListItemText primary="list of product" />
           </ListItemButton>
         </ListItem>
     </List>

     <List>
         
         <ListItem  disablePadding onClick={()=>navigate("/firstPage")} >
           <ListItemButton>
             <ListItemIcon>
            <LineAxisIcon />
             </ListItemIcon>
             <ListItemText primary="DASHBOARD"/>
           </ListItemButton>
         </ListItem>
     </List>



        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
        
        </Typography>
        <Typography paragraph>
         
        </Typography>
      </Box>
    </Box>
  );
}

export default AdminSpace