import {
  Drawer,
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {TurnedInNot} from '@mui/icons-material'

export const SideBar = ({ drawerWith = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Efrain Cabrera
          </Typography>
        </Toolbar>
        <Divider />
        <List>
            {
                ['Enero','Febrero','Marzo'].map(text=>(
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'lorem ewfwefewfewfewfewfwfwf'}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
      </Drawer>
    </Box>
  );
};