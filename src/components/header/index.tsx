import NavLinks from "./nav-links"
import IconSection from "./icons"
import Footer from "../footer/footer"

const Header = () => {
  return (
    <nav>
        <div className="flex w-full justify-between items-center px-36">

          {/* Logo */}
          <div className="w-25 h-8 border flex items-center justify-center overflow-hidden rounded">
              <img
                  src="./Logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
              />
          </div>

          {/* Nav Links */}
          <NavLinks/>

          {/* Icon Section */}
          <IconSection/>

          {/* Footer Section */}
          <Footer/>

      </div>
    </nav>
  )
}

export default Header
