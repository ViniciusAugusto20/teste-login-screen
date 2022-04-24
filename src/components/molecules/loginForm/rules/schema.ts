import * as Yup from 'yup';

import { LoginSchemaProps } from '../types';

export default Yup.object().shape({
  email: Yup.string().email().required(),
});

export const formSchema: Yup.ObjectSchema<LoginSchemaProps> = Yup.object({
  email: Yup.string().email('Enter a valid e-mail').required('Mandatory field'),
  password: Yup.string().required('Mandatory Field'),
}).defined();
