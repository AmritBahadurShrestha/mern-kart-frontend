import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginSchema } from '../../schema/auth.schema'
import type { ILoginData } from '../../types/auth.types'
import Input from '../common/inputs/input'

const LoginForm = () => {

  const methods = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(LoginSchema),
    mode: "all"
  })

  const onSubmit = (data: ILoginData) => {
    console.log(data)
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit= { methods.handleSubmit(onSubmit) }>

          <div className="mt-8 flex flex-col gap-6">

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

            {/* Sign In Button */}
            <div className="w-full mt-2">
              <button type="submit" className="cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-blue-600 py-3 rounded-md text-white font-semibold text-lg hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-md">
                Sign In
              </button>
            </div>

          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default LoginForm
