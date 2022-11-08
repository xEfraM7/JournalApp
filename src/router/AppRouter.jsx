import { Routes, Route, Navigate } from "react-router-dom";

import { AuthRoutes } from "../auth/Routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRoutes } from "../journal/Routes/JournalRoutes";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "autheticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
