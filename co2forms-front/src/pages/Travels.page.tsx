import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import TravelService from "../api/services/travels.services";
import Loading from "../components/basic-loading/Loading";
import NewTravelModal from "../components/modal/NewTravelModal";
import { Button } from "../components/shared/button";
import Sidebar from "../components/sidebar";
import TravelInfo from "../components/travel-info/TravelInfo";
import {
  changeNewTravelModal,
  changeUserTravel,
  useAppContext,
} from "../contexts/app";
import { ITravel } from "../interfaces/ITravel";
import { Role } from "../interfaces/IUser";

export default function TravelsPage() {
  const [loading, setLoading] = useState(false);
  const {
    newTravelModal,
    userTravels: travels,
    dispatch,
    user,
  } = useAppContext();

  useEffect(() => {
    const getTravels = async () => {
      try {
        setLoading(true);
        let resp: ITravel[];
        if (user?.role === Role.COLLABORATOR) {
          resp = await TravelService.userTravels();
        } else {
          resp = await TravelService.allTravels();
        }

        dispatch(changeUserTravel(resp));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    travels.length === 0 && getTravels();
  }, []);

  return (
    <Loading loading={loading} textLoading="Cargando viajes...">
      <div className="flex">
        <Sidebar />

        <div className="w-full | px-5 | py-4 | grid | gap-3 | place-items-start | content-start">
          {newTravelModal && <NewTravelModal />}

          <div className="grid | gap-3 | place-items-start | content-center | w-full | bg-slate-100 | rounded-xl | min-h-[80vh] | px-3 | py-3">
            {travels.length ? (
              travels.map((t, i) => (
                <TravelInfo travel={t} key={"travel" + i} />
              ))
            ) : (
              <h1 className="place-self-center | font-bold | text-xl">
                No hay viajes registrados
              </h1>
            )}
          </div>
          {user?.role === Role.COLLABORATOR && (
            <Button
              onClick={() => dispatch(changeNewTravelModal(true))}
              className="fixed | bottom-8 | right-8 | py-5"
            >
              + Nuevo viaje
            </Button>
          )}

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
      </div>
    </Loading>
  );
}
