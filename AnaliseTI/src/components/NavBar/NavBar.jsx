import codeLogo from '../../assets/code-solid.svg';
import { Link } from 'react-scroll';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg w-100 navbar-light bg-white border-bottom py-1 fixed-top nav-underline">
            <div className="container">
                {/* Logo e nome do sistema */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img className="logo" src={codeLogo} alt="logo" width="30" height="30" />
                    <div className="brand-name ms-2 d-flex flex-column">
                        <span className="brand-name-1 fw-bold" style={{ fontSize: '0.8rem', color: 'var(--primary-color)' }}>Fábrica de Software</span>
                        <span className="brand-name-2 fw-bold" style={{ fontSize: '0.7rem', color: 'var(--alt-text)' }}>Engenharia de Software</span>
                    </div>
                </a>

                {/* Links de navegação */}
                <div className="navbar-nav d-flex align-items-center">
                    <ul className="navbar-nav gap-2 d-flex align-items-center justify-content-center flex-row">
                        <li><Link className="nav-link" to="inicio" duration={500} activeClass="menu-ativo">Inicio</Link></li>
                        <li><Link className="nav-link" to="analise" duration={500} activeClass="menu-ativo">Análises</Link></li>
                        <li><Link className="nav-link" to="vagas" duration={500} activeClass="menu-ativo">Vagas</Link></li>
                        <li><Link className="nav-link" to="tecnologias" duration={500} activeClass="menu-ativo">Tecnologias</Link></li>

                    </ul>
                </div>

                <div className="navbar-button">
                    <button
                        type="button"
                        className="btn text-white d-flex"
                        style={{ backgroundColor: 'var(--primary-color)', fontSize: '0.8rem' }}
                        onClick={() => {
                            document.getElementById('panoramas')?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }}
                    >
                        Ver panoramas
                    </button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;