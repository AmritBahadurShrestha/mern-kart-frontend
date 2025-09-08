import * as yup from 'yup'

export const brand_schema = yup.object({
    name: yup.string().required('Brand name is required'),
    description: yup.string().required('Brand description is required').min(10, 'Minimum 10 char required'),
    logo: yup.mixed().required('Logo is required')
})
