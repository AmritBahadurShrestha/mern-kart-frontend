import { FormProvider, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Button from '../../common/button';
import TextArea from '../../common/inputs/text-area';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../common/inputs/input';
import { brand_schema } from '../../../schema/brand.schema';
import { postBrand, updateBrand } from '../../../api/brand.api';
import type { IBrandData, IBrandResponse } from '../../../types/brand.types';
import ImageInput from '../../common/inputs/image.input';
import { useNavigate } from 'react-router';

interface IProps {
    data?: IBrandResponse
}

const BrandForm: React.FC<IProps> = ({ data: brand }) => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const methods = useForm({
        defaultValues: {
            name: brand?.name || '',
            description: brand?.description ||''
        },
        resolver:yupResolver(brand_schema),
        mode: 'all'
    })

    //Mutation
    const {mutate, isPending} = useMutation({
        mutationFn: postBrand,
        onSuccess: (response) => {
            toast.success(response.message || 'Brand Added')
            methods.reset()
        },
        onError: (error) => {
            toast.error(error.message || 'Something Went Wrong')
        }
    })

    const { mutate: updateMutation, isPending: updating } = useMutation({
        mutationFn: updateBrand,
        onSuccess: (response) => {
            toast.success(response.message || 'Brand updated')
            queryClient.invalidateQueries({ queryKey: ['get_brand_by_id', brand?._id] })
            navigate('/admin/brand')
        },
        onError: (error) => {
            toast.error(error.message || 'Something Went Wrong')
        }
    })

    console.log(methods.formState.errors)

    const onSubmit = (data: IBrandData) => {
        const {name, logo, description } = data
        const formData = new FormData()
        console.log('Brand Form', data)
        formData.append('name', name)
        formData.append('description', description)
        if(logo instanceof File) {
            formData.append('logo', logo)
        }

        if (brand) {
            updateMutation({ formData, _id: brand?._id })
        } else {
            mutate(formData)
        }
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

                    {/* Image Input */}
                    <ImageInput
                        name='logo'
                        id='logo'
                        label='Brand Logo'
                        required
                    />
                
                    {/* Description */}
                    <TextArea
                        name='description'
                        id='description'
                        label ='Description'
                        placeholder='Enter brand description'
                        required
                    />
                </div>

                <div>
                    <Button
                        label= {isPending || updating ? "Submitting.." : 'Submit'}
                        type= 'submit'
                        isPending={isPending || updating}
                    />
                </div>

            </form>
        </FormProvider>
      
    </div>
  )
}

export default BrandForm
