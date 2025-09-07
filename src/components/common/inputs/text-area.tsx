import { useFormContext } from 'react-hook-form'
import { LuAsterisk } from 'react-icons/lu'

type Props = {
  label: string,
  id: string,
  name: string,
  placeholder?: string,
  required?: boolean
}

const TextArea = ({ id, label, name, placeholder='placeholder', required=false }: Props) => {

  const { register, watch, formState: { errors } } = useFormContext()

  return (
    <div className="flex flex-col gap-2">

      {/* Field */}
      <div className="flex">
        <label
          htmlFor={id}
          className="text-gray-700 font-medium mb-1"
        >
          {label}
        </label>
        { required && <LuAsterisk size={15} className="text-red-600"/> }
      </div>

      <textarea
        id={id}
        {...register(name)}
        className={
          `px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 border focus:outline-none transition-all duration-300
          ${errors[name] ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-500'}`
        }
        placeholder={placeholder}
        value= {watch(name)}
      />

      {/* error message */}
      <p className="text-red-600 text-xs h-1 -mt-2">{errors[name as string] ? errors[name]?.message as string: ''}</p>

    </div>
    )
}

export default TextArea
