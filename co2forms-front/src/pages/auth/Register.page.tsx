import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthService from "../../api/services/auth.services";
import { Button } from "../../components/shared/button";
import FormControl from "../../components/shared/form-control";
import { changeUserSession, useAppContext } from "../../contexts/app";
import { IUser, Role } from "../../interfaces/IUser";
import { registerSchema } from "../../schemas";
import Switch from "react-switch";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState<Role>(Role.COLLABORATOR);

  const navigator = useNavigate();
  const { dispatch } = useAppContext();
  const { handleSubmit, control } = useForm<IUser>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (values: IUser) => {
    try {
      values.role = role;
      const user = await toast.promise(AuthService.register(values), {
        pending: "Cargando...",
        error: "Lo sentimos, ocurrió un error",
      });
      dispatch(changeUserSession(user));
      navigator("/travels");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen | grid | place-items-center">
      <div
        className="px-10 | py-8 | rounded-2xl | shadow-lg | w-full"
        style={{ maxWidth: "400px" }}
      >
        {/* Header */}
        <div className="mb-9 | grid | place-items-center">
          <h1 className="text-xl | md:text-2xl | xl:text-3xl | font-bold | mt-4">
            Crear nueva cuenta
          </h1>
        </div>

        {/* Form */}
        <form
          className="flex | flex-col | gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl
            name="fullName"
            placeholder="Nombre"
            label="Nombre completo"
            type="text"
            control={control}
          />

          <FormControl
            name="email"
            placeholder="Email Address"
            label="Email"
            type="email"
            control={control}
          />

          <FormControl
            name="password"
            placeholder="Type user password"
            label="Password"
            type="password"
            control={control}
          />

          <label htmlFor="role">
            <span
              className="
                  block 
                | font-semibold 
                | text-xs 
                | md:text-sm 
                | xl:text-base
                | mb-2
                "
            >
              ¿Eres director?
            </span>
            <Switch
              id="role"
              name="role"
              onChange={(e) => setRole(e ? Role.DIRECTOR : Role.COLLABORATOR)}
              checked={role === Role.DIRECTOR}
            />
          </label>

          {/* Button Group */}
          <div className="flex | flex-col | gap-2">
            <Button type="submit">Registrar</Button>
            <Link to="/auth/login" className="w-full">
              <Button
                className="!bg-green-500 | hover:!bg-green-300 | w-full"
                type="button"
              >
                Ya tengo cuenta
              </Button>
            </Link>
          </div>
        </form>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
