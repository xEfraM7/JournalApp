import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
} from "@mui/material";
import {useSelector} from 'react-redux';
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWith = 240 }) => {

  const {displayName} = useSelector(state => state.auth);
  const {notes} = useSelector(state => state.journal);

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
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
            {
                notes.map(note=>(
                  <SideBarItem key={note.id} {...note}/>
                ))
            }
        </List>
      </Drawer>
    </Box>
  );
};
