
import { FaWhatsapp } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import './Style/Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Use setMenuOpen para atualizar o estado
    }
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [menuOpen]);

    return (
        <>
            <header>
                <div className="header">
                    <img src="./image/Logo.png" alt="Logo da clinica" />

                    <div  className={`headerItens ${menuOpen ? 'on' : ''}`}>
                        <div onClick={toggleMenu} className="menuBurger">
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                        <nav>
                            <ul>
                                <a href="">Sobre Nós</a>
                                <a href="">Tratamentos</a>
                                <a href="">Pacientes</a>
                                <a href="">Contato</a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Fim do header */}
        </>
    )
}

export default Header;
