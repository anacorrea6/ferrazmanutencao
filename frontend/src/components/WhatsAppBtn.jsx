import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsAppBtn() {
    return (
        <a 
            href="https://wa.me/message/IFPDRYP2S3WLG1" 
            className="whatsapp-btn" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-btn__icon" />
            <span className="whatsapp-btn__tooltip">Fale Conosco</span>
        </a>
    )
}
