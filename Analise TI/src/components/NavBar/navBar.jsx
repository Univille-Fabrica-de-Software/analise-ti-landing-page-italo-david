import reactLogo from '../../assets/react.svg'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
            <div className="container">
                {/* Logo e nome do sistema */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img className="logo" src={reactLogo} alt="logo" width="30" height="30"/>
                    <div className="brand-name ms-2 d-flex flex-column">
                        <span className="brand-name-1 fw-bold" style={{ fontSize: '0.8rem', color: 'var(--primary-color)' }}>Fábrica de Software</span>
                        <span className="brand-name-2 fw-bold" style={{ fontSize: '0.7rem', color: 'var(--alt-text)' }}>Engenharia de Software</span>
                    </div>
                </a>

                {/* Links de navegação */}
                <div className="navbar-nav d-flex align-items-center">
                    <ul className="navbar-nav gap-2 d-flex align-items-center justify-content-center flex-row">
                        <li><a className="nav-link" href="#">Início</a></li>
                        <li><a className="nav-link" href="#">Vagas</a></li>
                        <li><a className="nav-link" href="#">Tecnologias</a></li>
                        <li><a className="nav-link" href="#">Análise</a></li>
                    </ul>
                </div>

                <div className="navbar-button">
                    <button type="button" className="btn text-white" style={{ backgroundColor: 'var(--primary-color)' }}>Ver panoramas</button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;