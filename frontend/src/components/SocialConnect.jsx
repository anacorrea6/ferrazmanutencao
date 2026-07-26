import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function SocialConnect() {
    return (
        <section className="social-connect" id="redes-sociais">
            <div className="social-connect__container">
                <h2 className="section-title">CONECTE-SE CONOSCO</h2>
                <p className="social-connect__subtitle">
                    Fique por dentro das novidades, projetos e inovações industriais em nossas redes sociais
                </p>
                <div className="social-connect__grid">
                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/ferraz_manutencao?igsh=MWx5anQ4aTUxM2JyYQ==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-card social-card--instagram"
                    >
                        <div className="social-card__glass"></div>
                        <div className="social-card__icon-wrapper">
                            <FontAwesomeIcon icon={faInstagram} className="social-card__icon" />
                        </div>
                        <span className="social-card__name">Instagram</span>
                        <span className="social-card__handle">@ferrazautomacao</span>
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/ferraz-manutencao-388935422?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-card social-card--linkedin"
                    >
                        <div className="social-card__glass"></div>
                        <div className="social-card__icon-wrapper">
                            <FontAwesomeIcon icon={faLinkedinIn} className="social-card__icon" />
                        </div>
                        <span className="social-card__name">LinkedIn</span>
                        <span className="social-card__handle">Ferraz Automação</span>
                    </a>

                    {/* Facebook */}
                    <a 
                        href="https://www.facebook.com/share/1EGmH4iaQK/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-card social-card--facebook"
                    >
                        <div className="social-card__glass"></div>
                        <div className="social-card__icon-wrapper">
                            <FontAwesomeIcon icon={faFacebookF} className="social-card__icon" />
                        </div>
                        <span className="social-card__name">Facebook</span>
                        <span className="social-card__handle">Ferraz Industrial</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
