import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer" id="contato">
            <div className="footer__container">
                <div className="footer__column footer__column--contacts">
                    <a href="https://wa.me/message/IFPDRYP2S3WLG1" className="footer__link" target="_blank" rel="noopener noreferrer">
                        <Phone className="footer__contact-icon" />
                        <span>(11) 963 940 599</span>
                    </a>
                    <a href="mailto:ferrazmanutencaoo@gmail.com" className="footer__link">
                        <Mail className="footer__contact-icon" />
                        <span>ferrazmanutencaoo@gmail.com</span>
                    </a>
                </div>
                <div className="footer__column footer__column--location">
                    <div className="footer__location-wrapper">
                        <MapPin className="footer__location-icon" />
                        <span>Salto - SP</span>
                    </div>
                </div>
                <div className="footer__column footer__column--socials">
                    <div className="footer__socials-row">
                        <a 
                            href="https://www.instagram.com/ferraz_manutencao?igsh=MWx5anQ4aTUxM2JyYQ==" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__social-icon" 
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a 
                            href="https://ferrazautomacao.com.br" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__social-icon" 
                            aria-label="Website"
                        >
                            <Globe />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ferraz-manutencao-388935422?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__social-icon" 
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                    <p className="footer__copyright">
                        © 2026 Ferraz Automação Industrial. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
