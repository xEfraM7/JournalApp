import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

//creamos un nuevo objeto de GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    //aqui almacenamos el resultado de todos los datos que trae el popup
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //aqui almacenamos las credenciales de login
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.errorMessage;
    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    console.log(email, password, displayName);
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser, {
      displayName
    });
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.errorMessage,
    };
  }
};
