import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    email: 'Preencha um e-mail válido',
    min: 'Mínimo de ${min} caracteres',
    max: 'Máximo de ${max} caracteres',
  },
  number: {
    min: 'Deve ser maior ou igual a ${min}',
    max: 'Deve ser menor ou igual a ${max}',
  },
});

const Schema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  program_id: Yup.number().required(),
});
export default Schema;
