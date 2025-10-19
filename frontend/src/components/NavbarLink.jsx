import { Link, useLocation } from "react-router-dom";

export default function NavbarLink({ url, name }) {
    const location = useLocation();
    
    return (
        <Link
            to={url}
            className={`font-medium transition-colors duration-200 ${
                location.pathname === url
                ? "text-white border-b-2 border-[#80c684]"
                : "text-white/70 hover:text-white"
            }`}
            >
            {name}
        </Link>
    )
}