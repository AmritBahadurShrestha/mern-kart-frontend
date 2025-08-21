import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterSchema } from '../../schema/auth.schema'
import type { IRegisterData } from '../../types/auth.types'
import Input from '../common/inputs/input'
import { register } from '../../api/auth.api'
import { useNavigate } from 'react-router'
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast'

const RegisterForm = () => {

  const navigate = useNavigate()

  const methods = useForm({
      defaultValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: ""
      },
      resolver: yupResolver(RegisterSchema),
      mode: "all"
    })

  const {mutate, isPending} = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      console.log(response)
      toast.success(response.message ?? 'Registration Success')
      // sessionStorage.setItem('token', response.data)
      localStorage.setItem('token', JSON.stringify(response.data.data))

      navigate("/login")
    },
    onError: (error) => {
      console.log(error)
      toast.error(error?.message ?? 'Registration Failed')
    },
    mutationKey: ['register_mutation']
  })

  const onSubmit = async(data: IRegisterData) => {
    mutate(data)
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit= { methods.handleSubmit(onSubmit) }>

          <div className="mt-8 flex flex-col gap-6">

            {/* First Name Field */}
            <Input
              label= "First Name"
              id= "first_name"
              name= "first_name"
              placeholder= "First Name"
              required
            />

            {/* Last Name Field */}
            <Input
              label= "Last Name"
              id= "last_name"
              name= "last_name"
              placeholder= "Last Name"
              required
            />

            {/* Email Field */}
            <Input
              label= "Email"
              id= "email"
              name= "email"
              placeholder= "example@gmail.com"
              required
            />

            {/* Password Field */}
            <Input
              label= "Password"
              id= "password"
              name= "password"
              type= "password"
              placeholder= "••••••••••••••••••••••"
              required
            />

            {/* Phone Number Field */}
            <Input
              label= "Phone Number"
              id= "phone_number"
              name= "phone_number"
              placeholder= "+977 ••••••••••"
              required={false}
            />

            {/* Register Button */}
            <div className="w-full mt-2">
              <button
                type="submit"
                disabled={isPending}
                className="cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-blue-600 py-3 rounded-md text-white font-semibold text-lg hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-md"
              >
                Register
              </button>
            </div>

          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default RegisterForm
