import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Email inválido')
    .required('Email es requerido'),
  password: Yup.string()
    .required('Contraseña es requerida'),
});
