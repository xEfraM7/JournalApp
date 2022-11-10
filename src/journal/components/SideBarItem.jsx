import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { useDispatch } from "react-redux";

export const SideBarItem = ({ title = '',body,id,imageUrls = [],date}) => {
  const dispatch = useDispatch();
  const onClickNote = () => {
    dispatch(setActiveNote({title,body,id,imageUrls,date}));
  };

  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + "..."
      : title;
  }, [title]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick = {onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle } />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
