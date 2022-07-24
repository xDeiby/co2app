import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/shared/button";
import FormControl from "../../components/shared/form-control";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthService, { ILogin } from "../../api/services/auth.services";
import { toast, ToastContainer } from "react-toastify";
import { changeUserSession, useAppContext } from "../../contexts/app";
import { loginSchema } from "../../schemas";

export default function LoginPage() {
  const { dispatch } = useAppContext();
  const { handleSubmit, control } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const navigator = useNavigate();

  const onSubmit = async (values: ILogin) => {
    try {
      const user = await toast.promise(AuthService.login(values), {
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
            Iniciar sesión
          </h1>
        </div>

        {/* Form */}
        <form
          className="flex | flex-col | gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl
            name="email"
            placeholder="Correo electronico"
            label="Email"
            type="email"
            control={control}
          />

          <FormControl
            name="password"
            placeholder="**********"
            label="Contraseña"
            type="password"
            control={control}
          />

          {/* Button Group */}
          <div className="flex | flex-col | gap-2">
            <Button type="submit">Entrar</Button>
            <Link to="/auth/register">
              <Button
                className="!bg-green-500 | hover:!bg-green-300 | w-full"
                type="button"
              >
                Crear cuenta
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
