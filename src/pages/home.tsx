
import CategoryList from "../components/landing/category"
import FeaturedProducts from "../components/landing/featured-products"
import Hero from "../components/landing/hero"

const HomePage = () => {
  return (
    <main className="min-h-screen">
        <Hero/>
        <div className="px-36">
          <CategoryList/>
          <FeaturedProducts/>
        </div>

    </main>
  )
}

export default HomePage
