import { Outlet } from "react-router"
import Footer from "../components/footer/footer"
import Header from "../components/header"

const ClientLayout = () => {
  return (
    <main className='h-full w-full'>
        {/* Header Section */}
        <Header/>

        {/* Page Content Section */}
        <Outlet/>

        {/* Footer Section */}
        <Footer/>
      
    </main>
  )
}

export default ClientLayout
