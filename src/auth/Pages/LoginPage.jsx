import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../Layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useMemo } from "react";

const formData = {
  email: "efra@google.com",
  password: "123456",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  //lamamos la funcion dispatch
  const dispatch = useDispatch();

  //Aqui declaramos el estado inicial del login y desestruramos las funciones necesarias
  const { email, password, onInputChange } = useForm(formData);
  //Aqui prevenimos el comportamiento por defecto del formulario y enviamos los datos de login
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });
    //declaramos el dispatch para que se dispare en el submit
    dispatch(startLoginWithEmailPassword({ email, password }));
  };
  //Login con google
  const onGoogleSignIn = () => {
    console.log("onGoogle");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      {/* Aqui llamamos el onSubmit */}
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              //aqui declaramos lo necesario para el formulario con UseForm
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contrasena"
              type="password"
              placeholder="password"
              fullWidth
              //aqui declaramos lo necesario para el formulario con UseForm
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
