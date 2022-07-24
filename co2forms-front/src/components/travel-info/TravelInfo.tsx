import { useAppContext } from "../../contexts/app";
import { ITravel } from "../../interfaces/ITravel";
import { IUser, Role } from "../../interfaces/IUser";
import { co2Fn } from "../../utils/co2Table";

interface Props {
  travel: ITravel;
}

export default function TravelInfo({ travel }: Props) {
  const columnClass = {
    container: "text-center",
    name: "font-semibold | text-base | mb-2",
    data: "text-sm",
  };

  const { user } = useAppContext();

  return (
    <div
      style={{ boxShadow: "0 0 5px rgba(0,0,0,.3)" }}
      className={`w-full | grid | gap-5 | sm:grid-cols-3 | grid-cols-1 | ${
        user?.role === Role.DIRECTOR ? "xl:grid-cols-9" : "xl:grid-cols-6"
      } | bg-white | px-4 | py-2 | rounded-xl`}
    >
      {user?.role === Role.DIRECTOR && (
        <div className={columnClass.container}>
          <p className={columnClass.name}>Colaborador</p>
          <p className={columnClass.data}>
            {(travel.collaboratorId as unknown as IUser).fullName}
          </p>
        </div>
      )}

      <div className={columnClass.container}>
        <p className={columnClass.name}>Origen</p>
        <p className={columnClass.data}>{travel.initAddress}</p>
      </div>

      <div className={columnClass.container}>
        <p className={columnClass.name}>Destino</p>
        <p className={columnClass.data}>{travel.endAddress}</p>
      </div>

      <div className={columnClass.container}>
        <p className={columnClass.name}>Kilometros</p>
        <p className={columnClass.data}>{travel.numKilometers}</p>
      </div>

      <div className={columnClass.container}>
        <p className={columnClass.name}>¿Ida y vuelta?</p>
        <p className={columnClass.data}>{travel.isRoundTrip ? "Si" : "No"}</p>
      </div>

      <div className={columnClass.container}>
        <p className={columnClass.name}>Transporte</p>
        <p className={columnClass.data}>{travel.transport}</p>
      </div>

      <div className={columnClass.container}>
        <p className={columnClass.name}>Personas</p>
        <p className={columnClass.data}>{travel.peoples.length}</p>
      </div>

      {user?.role === Role.DIRECTOR && (
        <>
          <div className={columnClass.container}>
            <p className={columnClass.name}>Co2 Viaje</p>
            <p className={columnClass.data}>{Math.floor(co2Fn(travel))}</p>
          </div>

          <div className={columnClass.container}>
            <p className={columnClass.name}>Co2 x Persona</p>
            <p className={columnClass.data}>
              {co2Fn(travel)
                ? Math.floor(co2Fn(travel) / travel.peoples.length)
                : 0}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
