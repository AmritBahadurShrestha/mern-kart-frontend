import { BiCategory } from "react-icons/bi";
import type { ICategoryResponse } from "../../../types/category.types";

interface IProps {
    category: ICategoryResponse
}

const CategoryCard: React.FC<IProps> = ({category}) => {
  return (
    <div className="cursor-pointer flex gap-2 border border-gray-950 rounded-sm p-2">
      <div>
        <BiCategory size={32} className="text-blue-600"/>
      </div>
      <div>
        <h2 className="font-bold text-lg text-blue-600">{category.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-1">
            {category.description}
        </p>
      </div>
    </div>
  )
}

export default CategoryCard
