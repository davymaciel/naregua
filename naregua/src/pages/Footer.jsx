import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {

    return (
            <footer className="Footer">
                <ul>
                    <a href="https://www.instagram.com/naregua_barbers/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://w.app/jGUu7F" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </ul>
                <p className="copy_right"><span>NaRégua</span> &copy; 2024</p>
            </footer>
    )
}

export default Footer