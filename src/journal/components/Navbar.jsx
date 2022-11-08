import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import {useDispatch} from 'react-redux';
import { AppBar, IconButton, Toolbar, Grid, Typography} from "@mui/material";
import { startLogout } from "../../store/auth/thunks";

export const Navbar = ({ drawerWith = 240 }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWith}px)` },
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems='center'>
          <Typography variant='h6' noWrap component='div'>Journal App</Typography>
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
