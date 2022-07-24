import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactSwitch from "react-switch";
import { toast } from "react-toastify";
import TravelService from "../../api/services/travels.services";
import {
  addUserTravel,
  changeNewTravelModal,
  useAppContext,
} from "../../contexts/app";
import { ITravel, Transport } from "../../interfaces/ITravel";
import ModalLayout from "../../layouts/Modal.layout";
import { travelSchema } from "../../schemas/travel.schema";
import InputList from "../input-list/InputList";
import { Button } from "../shared/button";
import FormControl from "../shared/form-control";

export default function NewTravelModal() {
  const { handleSubmit, control, register } = useForm<ITravel>({
    resolver: yupResolver(travelSchema),
    mode: "onChange",
  });
  const [roundTrip, setRoundTrip] = useState(false);
  const [peoples, setPeoples] = useState<Array<string>>([]);

  const { dispatch } = useAppContext();
  const onSubmit = async (values: ITravel) => {
    try {
      values.peoples = [...peoples];
      values.isRoundTrip = roundTrip;

      const travel = await toast.promise(TravelService.createTravel(values), {
        pending: "Registrando...",
        error: "Lo sentimos, ocurrió un error en el registro",
        success: "¡Se ha registrado exitosamente!",
      });
      dispatch(addUserTravel(travel));
      dispatch(changeNewTravelModal(false));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalLayout>
      <div
        style={{ width: "min(620px, 90%)" }}
        className="bg-white px-8 | py-6 | rounded-xl | overflow-y-scroll | max-h-screen"
      >
        <h1 className="font-bold | text-2xl | mb-5">Nuevo viaje</h1>

        <form
          className="flex | flex-col | gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl
            name="initAddress"
            placeholder="Dirección origen"
            label="Dirección de origen"
            type="initAddress"
            control={control}
          />

          <FormControl
            name="endAddress"
            placeholder="Dirección destino"
            label="Dirección de destino"
            type="endAddress"
            control={control}
          />

          <FormControl
            name="numKilometers"
            placeholder="Kilometros"
            label="Número de kilometros"
            type="number"
            control={control}
          />

          <label htmlFor="transport">
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
              Medio de transporte
            </span>
            <select
              defaultValue={Transport.WALKING}
              id="transport"
              {...register("transport")}
              className="w-full | px-4 | py-2 | rounded-xl | overflow-hidden | bg-white | border | border-gray-300 | capitalize"
            >
              {Object.values(Transport).map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>

          <InputList
            id="peoples"
            label="Trabajadores"
            placeholder="Nombre Trabajador"
            addValue={(v) => setPeoples((p) => p.concat(v))}
            remove={(v) => setPeoples((p) => p.filter((p) => p !== v))}
            arrayValues={peoples}
          />

          <label htmlFor="isRoundTrip">
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
              ¿Ida y vuelta?
            </span>
            <ReactSwitch
              id="isRoundTrip"
              checked={roundTrip}
              onChange={setRoundTrip}
            />
          </label>

          {/* Button Group */}
          <div className="flex | flex-col | gap-2">
            <Button
              type="submit"
              className="disabled:bg-slate-100 | disabled:text-slate-300"
              disabled={peoples.length === 0}
            >
              Registrar viaje
            </Button>
            <Button
              onClick={() => dispatch(changeNewTravelModal(false))}
              className="!bg-green-500 | hover:!bg-green-300 | w-full"
              type="button"
            >
              Salir
            </Button>
          </div>
        </form>
      </div>
    </ModalLayout>
  );
}
