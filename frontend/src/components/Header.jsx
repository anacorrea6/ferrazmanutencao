'use client'

import { useState, useEffect } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], footer[id]')
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -50% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.getAttribute('id'))
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <a href="#home" className="header__logo" onClick={closeMenu}>
                    <img src="/img/LOGO - FERRAZ.jpeg" alt="Logo Ferraz" className="header__logo-img" />
                    <span className="header__logo-text">FERRAZ</span>
                </a>
                <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a 
                                href="/#home" 
                                className={`nav__link ${activeSection === 'home' ? 'nav__link--active' : ''}`}
                                onClick={closeMenu}
                            >
                                HOME
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/#servicos" 
                                className={`nav__link ${activeSection === 'servicos' ? 'nav__link--active' : ''}`}
                                onClick={closeMenu}
                            >
                                ESPECIALIDADES
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/#projetos" 
                                className={`nav__link ${activeSection === 'projetos' ? 'nav__link--active' : ''}`}
                                onClick={closeMenu}
                            >
                                PROJETOS
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/#blog" 
                                className={`nav__link ${activeSection === 'blog' ? 'nav__link--active' : ''}`}
                                onClick={closeMenu}
                            >
                                BLOG
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="/#contato" 
                                className={`nav__link ${activeSection === 'contato' ? 'nav__link--active' : ''}`}
                                onClick={closeMenu}
                            >
                                CONTATO
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href="/FormOrcamento" target="_blank" rel="noopener noreferrer" className="header__btn btn btn--primary">Solicitar Orçamento</a>
                {/*<a href="https://wa.me/message/IFPDRYP2S3WLG1" target="_blank" rel="noopener noreferrer" className="header__btn btn btn--primary">
                    Solicitar Orçamento
                </a>*/}
                <button 
                    className={`nav-toggle ${menuOpen ? 'nav-toggle--active' : ''}`} 
                    onClick={toggleMenu} 
                    aria-label="Abrir menu"
                >
                    <span className="nav-toggle__bar"></span>
                    <span className="nav-toggle__bar"></span>
                    <span className="nav-toggle__bar"></span>
                </button>
            </div>
        </header>
    )
}
