import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import HomePage from './pages/home'
import ContactUs from './pages/contact-us'
import ProductsPage from './pages/products'
import PageNotFound from './pages/page-not-found'
import AboutUs from './pages/about-us'
import PrivacyPolicy from './pages/privacy-policy'
import { Toaster } from 'react-hot-toast'
import ClientLayout from './layouts/client.layout'
import WishListPage from './pages/wishlist'
import ProductDetailPage from './pages/detail-page'
import ProtectedCartPage from './pages/cart'
import Dashboard from './pages/admin/dashboard'
import UserPage from './pages/admin/user'
import OrderPage from './pages/admin/order'
import AdminLayout from './layouts/admin.layout'
import CategoryPage from './pages/admin/category'
import CreateCategory from './pages/admin/category/add.category'
import Checkout from './pages/checkout-page'
import Payment from './pages/payment-page'
import BrandPage from './pages/admin/brand'
import CreateBrand from './pages/admin/brand/add.brand'
import ProductPage from './pages/admin/product'
import CreateProduct from './pages/admin/product/add.product'

function App() {

  return (
    <main className='h-full tracking-wider'>
      {/* <h1 className="text-center text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-md tracking-wide animate-pulse">
        MERN KART
      </h1> */}

      <Router>
        <Routes>

          <Route path='/login' element= { <Login/> }/>
          <Route path='/register' element= { <Register/> }/>

          <Route path='/' element= { <ClientLayout/> }>
            <Route path='/' element= { <HomePage/> }/>
            <Route path='/products' element= { <ProductsPage/> }/>
            <Route path='/about-us' element= { <AboutUs/> }/>
            <Route path='/contact-us' element= { <ContactUs/> }/>
            <Route path='/privacy-policy' element= {<PrivacyPolicy/> }/>
            <Route path='/wishlist' element= {<WishListPage/> }/>
            <Route path='/product/:id' element= {<ProductDetailPage/> }/>
            <Route path='/cart' element= {<ProtectedCartPage/> }/>
            <Route path='/checkout' element= {<Checkout/> }/>
            <Route path='/payment' element= {<Payment/> }/>
            <Route path='*' element= {<PageNotFound/>}/>
          </Route>

          {/* Admin Routes */}
          <Route path='/admin' element= {<AdminLayout/>}>
            <Route path='/admin' element= {<Dashboard/>}/>
            <Route path='/admin/users' element= {<UserPage/>}/>
            <Route path='/admin/orders' element= {<OrderPage/>}/>
            <Route path='/admin/category' element= {<CategoryPage/>}/>
            <Route path='/admin/category/add' element= {<CreateCategory/>}/>

            {/* Brand */}
            <Route path='/admin/brand' element= {<BrandPage/>}/>
            <Route path='/admin/brand/add' element= {<CreateBrand/>}/>

            {/* Product */}
            <Route path='/admin/product' element= {<ProductPage/>}/>
            <Route path='/admin/product/add' element= {<CreateProduct/>}/>

            <Route path='*' element= {<PageNotFound/>}/>
          </Route>
          
        </Routes>
      </Router>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </main>
  )
}

export default App
