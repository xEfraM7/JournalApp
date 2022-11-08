import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthRoutes } from "../auth/Routes/AuthRoutes";
import { JournalRoutes } from "../journal/Routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { FirebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth/authSlice";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {(status === 'authenticated' )
        ? 
        <Route path="/*" element={<JournalRoutes />} />
        : 
        <Route path="/auth/*" element={<AuthRoutes />} />
      }

      <Route path='/*' element={<Navigate to='/auth/login' />}/>
    </Routes>
  );
};
