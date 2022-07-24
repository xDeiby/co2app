import { NavLink } from "react-router-dom";
import {
  changeUserSession,
  changeUserTravel,
  useAppContext,
} from "../../contexts/app";
import { Button } from "../shared/button";

const NAV_LINKS = [{ path: "/travels", txt: "Viajes Registrados" }];

export default function Sidebar() {
  const { dispatch } = useAppContext();

  const onLogout = () => {
    localStorage.removeItem("authorization");
    dispatch(changeUserTravel([]));
    dispatch(changeUserSession(null));
  };

  return (
    <nav className="min-h-screen | w-60 | bg-blue-500 | p-4 | flex | flex-col | justify-between">
      <div>
        <h1 className="text-center | font-bold | text-3xl | pb-2 | border-b | border-white | text-white">
          Co2App
        </h1>

        <ul className="bg-white | flex | flex-col | gap-4 | rounded-lg | py-2 | px-4 | mt-3 | min-h-[300px]">
          {NAV_LINKS.map(({ path, txt }) => (
            <NavLink
              key={path}
              className={({ isActive }) => `
        text-blue-500
        | font-semibold
        | text-center
        | px-4
        | py-2
        | rounded-lg
        | hover:bg-blue-300
        | transition-colors
        | ${isActive && "bg-blue-500 | !text-white"}
      `}
              to={path}
            >
              {txt}
            </NavLink>
          ))}
        </ul>
      </div>

      <Button onClick={onLogout} className="bg-white | text-blue-500">
        Salir
      </Button>
    </nav>
  );
}
