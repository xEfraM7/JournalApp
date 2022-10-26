import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

//aqui se crearon los thunks para asi poder cambiar el status del login utilizando el reducer de checking credentials

export const checkingAuthentication = (email,password) => {
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}