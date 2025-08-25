import ComponentTitle from "../common/title-component"
import ProductList from "./product"

const FeaturedProducts = () => {
  return (
    <div className="py-10 min-h-[800px]">
        <ComponentTitle
          title='Featured Products'
          sub_title='Limited Stock Shop Featured Favorites Today'
          link='#'
        />

        <div>
          <ProductList/>
        </div>

    </div>
  )
}

export default FeaturedProducts
