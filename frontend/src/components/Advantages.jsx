import { Wrench, Sliders, Award } from 'lucide-react'

export default function Advantages() {
    return (
        <section className="advantages">
            <div className="advantages__container">
                <div className="advantage-item">
                    <Wrench className="advantage-item__icon" />
                    <span className="advantage-item__text">ATENDIMENTO TÉCNICO ESPECIALIZADO</span>
                </div>
                <div className="advantage-item">
                    <Sliders className="advantage-item__icon" />
                    <span className="advantage-item__text">SOLUÇÕES SOB MEDIDA</span>
                </div>
                <div className="advantage-item">
                    <Award className="advantage-item__icon" />
                    <span className="advantage-item__text">COMPROMISSO COM RESULTADO</span>
                </div>
            </div>
        </section>
    )
}
