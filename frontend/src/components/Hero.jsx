import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__overlay"></div>
            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__tagline-wrapper">
                        <span className="hero__tagline-line"></span>
                        <span className="hero__tagline">ENGENHARIA E AUTOMAÇÃO</span>
                    </div>
                    <h1 className="hero__title">
                        AUTOMAÇÃO INTELIGENTE <br />PARA AUMENTAR A <br />
                        <span className="hero__title--highlight">PRODUTIVIDADE</span> <br />DA SUA EMPRESA
                    </h1>
                    <p className="hero__bullets">
                        Robôs Industriais • Injetoras • NR-12 • Retrofit • Programação CLP • IoT Industrial • Assistência Técnica
                    </p>
                    <a href="/FormOrcamento" target="_blank" rel="noopener noreferrer" className="hero__btn btn btn--cta">
                        SOLICITAR UM ORÇAMENTO <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    )
}
