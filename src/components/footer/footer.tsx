import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 text-gray-200 py-6 fixed bottom-0 left-0 w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            MernKart
          </h3>
          <p className="text-gray-400 text-sm">© 2025 MernKart. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link
            to="/about-us"
            className="hover:text-indigo-400 transition duration-300 ease-in-out"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-purple-400 transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-pink-400 transition duration-300 ease-in-out"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
