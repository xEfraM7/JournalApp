import { Grid, Typography, Button, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import {useMemo} from 'react';

export const NoteView = () => {
  const { active:activeNote } = useSelector((state) => state.journal);

  const { body, title, onInputChange, formState, date } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString();
  }, [])

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="ingrese un titulo"
          label="titulo"
          sx={{ border: "none", mb: 1 }}
          name='title'
          value={title}
          onChange = {onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="que sucedio hoy?"
          label="Descripcion"
          minRows={5}
          name='body'
          value={body}
          onChange = {onInputChange}
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
