import { Link, useLocation } from "react-router";

const links: {label: string, link: string}[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Products',
        link: '/products'
    },
    {
        label: 'About Us',
        link: '/about-us'
    },
    {
        label: 'Contact Us',
        link: '/contact-us'
    }
]

const NavLinks = () => {

    const location = useLocation()
    const active_path = location.pathname

    return(
        <div className="flex gap-6">
            {
                links.map((item, index) => (
                    <Link className= {`hover:font-semibold w-[100px] transition-all-300
                        ${active_path === item.link ? 'font-bold text-indigo-500' : 'text-gray-950'}`}
                        key= {`${item.link}-${index}`} to = {item.link}>
                        <span className="text-[16px]">{item.label}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default NavLinks
