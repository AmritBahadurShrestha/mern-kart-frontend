import { FormProvider, useForm } from 'react-hook-form'
import type { ICategoryData, ICategoryResponse } from '../../../types/category.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { postCategory, updateCategory } from '../../../api/category.api';
import Button from '../../common/button';
import TextArea from '../../common/inputs/text-area';
import { yupResolver } from '@hookform/resolvers/yup';
import { category_schema } from '../../../schema/category.schema';
import Input from '../../common/inputs/input';
import { useNavigate } from 'react-router';

interface IProps {
    data?: ICategoryResponse
}

const CategoryForm: React.FC<IProps> = ({ data: category }) => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const methods = useForm({
        defaultValues: {
            name: category?.name || '',
            description: category?.description ||''
        },
        resolver:yupResolver(category_schema),
        mode: 'all'
    })

    //Mutation
    const {mutate, isPending} = useMutation({
        mutationFn: postCategory,
        onSuccess: (response) => {
            toast.success(response.message || 'Category Added')
            methods.reset()
        },
        onError: (error) => {
            toast.error(error.message || 'Something Went Wrong')
        }
    })

    const { mutate: updateMutation, isPending: updating } = useMutation({
        mutationFn: updateCategory,
        onSuccess: (response) => {
            toast.success(response.message || 'Category updated');
            queryClient.invalidateQueries({ queryKey: ['get_category_by_id', category?._id] })
            navigate('/admin/category')
        },
        onError: (error) => {
            toast.error(error.message || 'Something went wrong.')
        }

    })

    const onSubmit = (data: ICategoryData) => {
        console.log('Category Form', data)
        if (category) {
            updateMutation({ ...data, _id: category?._id })
        } else {
            mutate(data)
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
                      label='Category Name' 
                      placeholder='Enter category name'
                      required
                    />
                
                    {/* Description */}
                    <TextArea
                    name='description'
                      id='description'
                      label ='Description'
                      placeholder='Enter category description'
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

export default CategoryForm
