import { Navigate, Route, Routes as ReactRoutes } from "react-router-dom";
import AuthLayout from "../layouts/Auth.layout";
import LoginPage from "../pages/auth/Login.page";
import RegisterPage from "../pages/auth/Register.page";
import TravelsPage from "../pages/Travels.page";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />

      <Route
        path="/travels"
        element={
          <AuthLayout>
            <TravelsPage />
          </AuthLayout>
        }
      />

      <Route path="*" element={<Navigate to="/travels" />} />
    </ReactRoutes>
  );
}
