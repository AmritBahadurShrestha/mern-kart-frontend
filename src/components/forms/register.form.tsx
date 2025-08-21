import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterSchema } from '../../schema/auth.schema'
import type { IRegisterData } from '../../types/auth.types'
import Input from '../common/inputs/input'
import { useState } from 'react'
import { register } from '../../api/auth.api'
import { useNavigate } from 'react-router'

const RegisterForm = () => {

  // State Management
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

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

  const onSubmit = async(data: IRegisterData) => {
    try {
          setLoading(true);
          setError(null);
          setSuccess(false);

          console.log(data);
          await register(data);
          setSuccess(true) // Registration success

          // Redirect after a short delay
          setTimeout(() => {
            navigate("/login") // redirect to login page
          }, 1500)

        } catch (error: any) {
          setError(error?.response?.data?.message || "Registration Failed!");
        } finally {
          setLoading(false);
        }
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

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            {/* Success Message */}
            {success && (
              <p className="text-green-500 text-sm font-medium">
                Registration Successful. Redirecting to login...
              </p>
            )}

            {/* Register Button */}
            <div className="w-full mt-2">
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-blue-600 py-3 rounded-md text-white font-semibold text-lg hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-md
                  ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500"
                }`}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>

          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default RegisterForm
