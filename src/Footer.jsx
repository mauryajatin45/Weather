import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons for GitHub and LinkedIn
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2023 Weather App. All rights reserved.</p>
            <div className="footer-links">
                <a 
                    href="https://github.com/mauryajatin45/Weather" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-link github"
                >
                    <FaGithub size={24} />
                </a>
                <a 
                    href="https://linkedin.com/in/mauryajatin" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-link linkedin"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    );
}
