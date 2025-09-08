import { useRef } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { LuAsterisk } from 'react-icons/lu'

interface IProps {
    id: string
    label: string
    required?: boolean
    placeholder?: string
    name: string
}

const ImageInput:React.FC<IProps> = ({ label, id, required=false, placeholder='Click to upload image', name }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const {control, formState: {errors}} = useFormContext()
    const {field: {onChange, value}} = useController({name, control})

    const onImageChange = (file: FileList | null) => {
        if(!file) return
        console.log(file)
        const images = new Array(...file)
        console.log(images)
        onChange(images[0])
    }

  return (
    <div>
        {/* Label */}
        <div className="flex">
          <label
            htmlFor={id}
            className="text-sm text-gray-700 font-medium"
          >
            {label}
          </label>
          { required && <LuAsterisk size={15} className="text-red-600"/> }
        </div>

        {/* input */}
        <div
            onClick={() => {
                if(!inputRef) return null
                inputRef.current?.click()
            }}
            className={`cursor-pointer mt-2 ${errors[name as string] ? 'border-red-600' : 'border-violet-600'} border p-2 rounded-md min-h-25 border-dashed flex flex-col items-center justify-center`}>
            <input
                ref={inputRef}
                id={id}
                type='file'
                className='hidden'
                onChange={(e) => {onImageChange(e.target.files)}}
            />
            <p className='text-sm text-gray-600'>{placeholder}</p>  
            {/* error message */}
            <p className="text-red-600 text-xs h-1 -mt-2">{errors[name as string] ? errors[name]?.message as string: ''}</p>
        </div>

        {/* Preview */}
        {value && <div className='h-25 mt-5 flex gap-2'>
            <img
                src={URL.createObjectURL(value)}
                alt='Image Preview'
                className='h-full w-25 border border-gray-600 p-1 rounded-md'
            />
        </div>}
      
    </div>
  )
}

export default ImageInput
