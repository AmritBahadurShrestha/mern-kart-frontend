import * as yup from 'yup'

export const category_schema = yup.object({
    name: yup.string().required('Category name is required'),
    description: yup.string().required('Category description is required').min(10, 'Minimum 10 char required')
})
