import * as Yup from 'yup';

export const registerSchema = Yup.object({
  fullName: Yup.string().required('Nombre es requerido'),
  email: Yup.string()
  .email('Email inválido')
  .required('Email es requerido'),
  password: Yup.string()
  .min(5, 'Al menos 5 carácteres')
  .required('Contraseña es requerida'),
});
