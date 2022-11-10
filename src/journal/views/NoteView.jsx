import { Grid, Typography, Button, TextField, IconButton } from "@mui/material";
import { SaveOutlined, UploadOutlined,DeleteOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    active: activeNote,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, onInputChange, formState, date } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, []);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire(" Nota Actualizada ", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const fileInputRef = useRef();

  const onDelete = () => {
    dispatch(startDeletingNote());
  }

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
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => {
            fileInputRef.current.click();
          }}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
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
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="que sucedio hoy?"
          label="Descripcion"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>

      <Grid container justifyContent='end'>
          <Button
          onClick={onDelete}
          sx = {{mt:2}}
          color = 'error'>
            <DeleteOutlined/>
            Borrar Nota
          </Button>
      </Grid>

      <ImageGallery 
      images = {activeNote.imageUrls}/>
    </Grid>
  );
};
