import * as yup from 'yup'

export const LoginSchema = yup.object ({
    email: yup.string().required('email is required').email('invalid email format'),
    password: yup.string().required('password is required')
})

export const RegisterSchema = yup.object ({
    first_name: yup.string().required('first_name is required'),
    last_name: yup.string().required('last_name is required'),
    email: yup.string().required('email is required').email('invalid email format'),
    password: yup.string().required('password is required'),
    phone_number: yup.string().optional()
})
