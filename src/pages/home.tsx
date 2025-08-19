
import Header from "../components/header"
import FeaturedProducts from "../components/landing/featured-products"
import Hero from "../components/landing/hero"

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Header/>
        <Hero/>
        <div className="px-36">
          <FeaturedProducts/>
        </div>

    </main>
  )
}

export default HomePage
