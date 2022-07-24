import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../api/services/auth.services";
import Loading from "../components/basic-loading/Loading";
import { changeUserSession, useAppContext } from "../contexts/app";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  const { user, dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    const session = async () => {
      try {
        setLoading(true);
        const user = await AuthService.session();
        dispatch(changeUserSession(user));
      } catch (error) {
        localStorage.clear();
        console.error(error);
        navigator("/auth/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    if (!user) session();
  }, [user]);

  return (
    <Loading loading={loading} textLoading="Verificando sesión...">
      {children}
    </Loading>
  );
}
