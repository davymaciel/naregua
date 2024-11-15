import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {

    return (
            <footer className="Footer">
                <ul>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaWhatsapp />
                    </li>
                </ul>
                <p><span>NaRégua</span> &copy; 2024</p>
            </footer>
    )
}

export default Footer