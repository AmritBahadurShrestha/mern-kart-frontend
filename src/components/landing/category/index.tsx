import { useQuery } from "@tanstack/react-query"
import ComponentTitle from "../../common/title-component"
import CategoryCard from "./card"
import { getAllCategory } from "../../../api/category.api"
import type { ICategoryResponse } from "../../../types/category.types"


const CategoryList = () => {

  const {data, isLoading} = useQuery({
    queryFn: getAllCategory,
    queryKey: ['get_all_category']
  })
  return (
    <div>
      <ComponentTitle
        title = 'Our featured Categories'
        sub_title = 'Explore products by categories'
      />
      <div>
        {
          isLoading && <div className="flex justify-center items-center w-full h-full">
            <p className="text-[16px] text-gray-700">Loading...</p>
          </div>
        }
      </div>

      { !isLoading && data?.data.length > 0 ? <div className="mt-6 grid grid-cols-4 gap-10">
        {
         data?.data.map((category: ICategoryResponse) => <CategoryCard category={category}/>)
        }
      </div> :
      <div>
        <p>No Category Found</p>
      </div>
      }
    </div>
  )
}

export default CategoryList
