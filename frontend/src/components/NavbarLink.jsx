import { Link } from "react-router-dom";

export default function NavbarLink({ url, name }) {
    return (
        <Link
            to={url}
            className={`font-medium ${
                location.pathname === url
                ? "text-white border-b-2 border-[#80c684]"
                : "text-gray-600 hover:text-blue-500"
            }`}
            >
            {name}
        </Link>
    )
}