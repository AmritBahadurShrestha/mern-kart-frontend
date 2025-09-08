import * as yup from 'yup'

export const product_schema = yup.object({
    name: yup.string().required('Product name is required'),
    description: yup.string().required('Product description is required').min(10, 'Minimum 10 char required'),
    cover_image: yup.mixed().required('Cover image is required'),
    images: yup.array().of(yup.mixed()).nullable(),
    brand: yup.string().required('Brand is required'),
    category: yup.string().required('Category is required'),
    price: yup.number().typeError('Price must be a number').required('Price is required').min(0, 'Price must be a positive number'),
    stock: yup.number().typeError('Stock must be a number').min(0, 'Stock cannot be negative').default(0),
    size: yup.string().nullable(),
    isFeatured: yup.boolean().default(false)
})
