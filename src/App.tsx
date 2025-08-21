import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import HomePage from './pages/home'
import DynamicPage from './pages/detail-page'
import ContactUs from './pages/contact-us'
import ProductsPage from './pages/products'
import PageNotFound from './pages/page-not-found'
import AboutUs from './pages/about-us'
import PrivacyPolicy from './pages/privacy-policy'
import Footer from './components/footer/footer'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <main className='h-full'>
      {/* <h1 className="text-center text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-md tracking-wide animate-pulse">
        MERN KART
      </h1> */}

      <Router>
        <Routes>
          <Route path='/' element= { <HomePage/> }/>
          <Route path='/login' element= { <Login/> }/>
          <Route path='/register' element= { <Register/> }/>
          <Route path='/products' element= { <ProductsPage/> }/>
          <Route path='/about-us' element= { <AboutUs/> }/>
          <Route path='/contact-us' element= { <ContactUs/> }/>
          <Route path='/privacy-policy' element= {<PrivacyPolicy/> }/>
          <Route path='/footer' element= {<Footer/> }/>
          <Route path='/product/:id' element= { <DynamicPage/> }/>
          <Route path='*' element= {<PageNotFound/>}/>
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
