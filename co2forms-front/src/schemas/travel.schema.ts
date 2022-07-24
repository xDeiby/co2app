import * as Yup from "yup";

export const travelSchema = Yup.object({
  initAddress: Yup.string().required("Dirección es requerido"),
  endAddress: Yup.string().required("Dirección es requerida"),
  numKilometers: Yup.number().required("Número de kilometros requerido"),
});
