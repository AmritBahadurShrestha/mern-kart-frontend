import { FormProvider, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Button from '../../common/button';
import TextArea from '../../common/inputs/text-area';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../common/inputs/input';
import ImageInput from '../../common/inputs/image.input';
import { product_schema } from '../../../schema/product.schema';
import { postProduct } from '../../../api/product.api';
import type { IProductData } from '../../../types/products.types';
import SelectInput from '../../common/inputs/select.input';

const ProductForm = () => {
    const methods = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: 0,
            stock: 0,
            size: '',
            brand: '',
            category: '',
            isFeatured: false
        },
        resolver:yupResolver(product_schema),
        mode: 'all'
    })

    //Mutation
    const {mutate, isPending} = useMutation({
        mutationFn: postProduct,
        onSuccess: (response) => {
            toast.success(response.message || 'Product Added')
            methods.reset()
        },
        onError: (error) => {
            toast.error(error.message || 'Something Went Wrong')
        }
    })

    console.log(methods.formState.errors)

    const onSubmit = (data: IProductData) => {
        const { name, description, cover_image, images, brand, category, price, stock, size, isFeatured } = data
        const formData = new FormData()
        console.log('Brand Form', data)

        formData.append('name', name)
        formData.append('description', description)
        formData.append('brand', brand)
        formData.append('category', category)
        formData.append('size', size || '')
        formData.append('price', String(price))
        formData.append('stock', String(stock))
        formData.append('isFeatured', String(isFeatured))

        if(cover_image instanceof File) {
            formData.append('cover_image', cover_image)
        }

        if (Array.isArray(images)) {
            images.forEach((img: File) => {
                if (img instanceof File) {
                    formData.append('images', img)
                }
            })
        }

        mutate(formData)
      };

  return (
    <div>
        {/* Hook Form Provider */}
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-4'>

                <div className='flex flex-col gap-6'>
                    {/* Name Input */}
                    <Input
                        name='name'
                        id='name'
                        label='Brand Name' 
                        placeholder='Enter brand name'
                        required
                    />

                    {/* Description */}
                    <TextArea
                        name='description'
                        id='description'
                        label ='Description'
                        placeholder='Enter Product description'
                        required
                    />

                    {/* Cover Image Input */}
                    <ImageInput
                        name='cover_image'
                        id='cover_image'
                        label='Cover Image'
                        required
                    />

                    {/* Multiple Images */}
                    <ImageInput
                        name="images"
                        id="images"
                        label="Product Images"
                        multiple
                    />

                    {/* Brand */}
                    <SelectInput
                        name="brand"
                        id="brand"
                        label="Brand"
                        placeholder="Select brand"
                        options={}
                        required
                    />

                    {/* Category */}
                    <SelectInput
                        name="category"
                        id="category"
                        label="Category"
                        placeholder="Select category"
                        options={}
                        required
                    />

                    {/* Price */}
                    <Input
                        type="number"
                        name="price"
                        id="price"
                        label="Price"
                        placeholder="Enter price"
                        required
                    />

                    {/* Stock */}
                    <Input
                        type="number"
                        name="stock"
                        id="stock"
                        label="Stock"
                        placeholder="Enter stock quantity"
                    />

                    {/* Size */}
                    <Input
                        name="size"
                        id="size"
                        label="Size"
                        placeholder="Enter size (e.g. M, L, XL)"
                    />

                    {/* Featured */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            {...methods.register('isFeatured')}
                            id="isFeatured"
                        />
                        <label
                            htmlFor="isFeatured">
                                Featured Product?
                        </label>
                    </div>

                </div>

                <div>
                    <Button
                        label= 'Submit'
                        type= 'submit'
                        isPending={isPending}
                    />
                </div>

            </form>
        </FormProvider>
      
    </div>
  )
}

export default ProductForm
