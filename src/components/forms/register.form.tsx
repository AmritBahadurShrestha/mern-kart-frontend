import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterSchema } from '../../schema/auth.schema'
import type { IRegisterData } from '../../types/auth.types'
import Input from '../common/inputs/input'

const RegisterForm = () => {

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

  const onSubmit = (data: IRegisterData) => {
    console.log(data)
  }

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



          {/* First Name
          <div className="flex flex-col gap-2"> */}

            {/*  */}
            {/* <div className="flex">
                <label
              htmlFor="first_name"
              className="text-sm text-gray-700 font-medium"
            >
              First Name
            </label>
            <LuAsterisk size={15} className="text-red-600"/>
            </div>

            <input
              id="first_name"
              {...register('first_name')}
              placeholder="First Name"
              className={
                `px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 border focus:outline-none transition-all duration-300
                ${errors.first_name ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-500'}`
              }
              value={watch('first_name')}
            /> */}
            {/* error message */}
            {/* <p className="text-red-600 text-xs h-1 -mt-2">{errors.first_name ? errors.first_name.message: ''}</p>
          </div> */}

          {/* Last Name */}
          {/* <div className="flex flex-col gap-2"> */}
            
            {/*  */}
            {/* <div className="flex">
                <label
              htmlFor="last_name"
              className="text-sm text-gray-700 font-medium"
            >
              Last Name
            </label>
            <LuAsterisk size={15} className="text-red-600"/>
            </div>

            <input
              id="last_name"
              {...register('last_name')}
              placeholder="Last Name"
              className={
                `px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 border focus:outline-none transition-all duration-300
                ${errors.last_name ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-500'}`
              }
              value={watch('last_name')}
            /> */}
            {/* error message */}
            {/* <p className="text-red-600 text-xs h-1 -mt-2">{errors.last_name ? errors.last_name.message: ''}</p>
          </div> */}

          {/* Email */}
          {/* <div className="flex flex-col gap-2"> */}
            
            {/*  */}
            {/* <div className="flex">
                <label
              htmlFor="email"
              className="text-sm text-gray-700 font-medium"
            >
              Email
            </label>
            <LuAsterisk size={15} className="text-red-600"/>
            </div>

            <input
              id="email"
              {...register('email')}
              placeholder="example@gmail.com"
              className={
                `px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 border focus:outline-none transition-all duration-300
                ${errors.email ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-500'}`
              }
              value= {watch('email')}
            /> */}
            {/* error message */}
            {/* <p className="text-red-600 text-xs h-1 -mt-2">{errors.email ? errors.email.message: ''}</p>
          </div> */}

          {/* Password */}
          {/* <div className="flex flex-col gap-2"> */}
            
            {/*  */}
            {/* <div className="flex">
                <label
              htmlFor="password"
              className="text-sm text-gray-700 font-medium"
            >
              Password
            </label>
            <LuAsterisk size={15} className="text-red-600"/>
            </div>

            <input
              id="password"
              {...register('password')}
              placeholder="••••••••••••••••••••••"
              className={
                `px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 border focus:outline-none transition-all duration-300
                ${errors.password ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-500'}`
              }
              value= {watch('password')}
            /> */}
            {/* error message */}
            {/* <p className="text-red-600 text-xs h-1 -mt-2">{errors.password ? errors.password.message: ''}</p>
          </div> */}

          {/* Phone Number */}
          {/* <div className="flex flex-col gap-2"> */}
            
            {/*  */}
            {/* <div className="flex">
                <label
              htmlFor="phone_number"
              className="text-sm text-gray-700 font-medium"
            >
              Phone Number
            </label>
            <LuAsterisk size={15} className="text-red-600"/>
            </div>

            <input
              id="phone_number"
              {...register('phone_number')}
              placeholder="+977 ••••••••••"
              className={
                `px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 border focus:outline-none transition-all duration-300
                ${errors.phone_number ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-500'}`
              }
              value= {watch('phone_number')}
            /> */}
            {/* error message */}
            {/* <p className="text-red-600 text-xs h-1 -mt-2">{errors.phone_number ? errors.phone_number.message: ''}</p>
          </div> */}

            {/* Register Button */}
            <div className="w-full mt-2">
              <button type="submit" className="cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-blue-600 py-3 rounded-md text-white font-semibold text-lg hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-md">
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
