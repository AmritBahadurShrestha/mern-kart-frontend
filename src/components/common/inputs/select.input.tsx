import { useController, useFormContext } from 'react-hook-form'
import { LuAsterisk } from 'react-icons/lu'

interface IProps {
  id: string
  label: string
  required?: boolean
  placeholder?: string
  name: string
  options: { label: string; value: string }[]
}

const SelectInput: React.FC<IProps> = ({ id, label, name, required = false, placeholder, options }) => {
  const { control, formState: { errors } } = useFormContext()
  const { field } = useController({ name, control })

  return (
    <div>
      <div className="flex">
        <label htmlFor={id} className="text-sm text-gray-700 font-medium">
          {label}
        </label>
        {required && <LuAsterisk size={15} className="text-red-600" />}
      </div>

      <select
        id={id}
        {...field}
        className={`mt-2 border p-2 rounded-md w-full ${
          errors[name] ? 'border-red-600' : 'border-violet-600'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <p className="text-red-600 text-xs mt-1">
        {errors[name] ? (errors[name]?.message as string) : ''}
      </p>
    </div>
  )
}

export default SelectInput
