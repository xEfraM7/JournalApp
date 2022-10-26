import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Navbar, SideBar } from "../components";


const drawerWith = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}

        <Navbar drawerWith={drawerWith}/>

      {/* Sidebar */}

        <SideBar drawerWith={drawerWith}/>

      <Box 
      component="main"
      sx={{flexGrow:1,p:3}}
      >
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
