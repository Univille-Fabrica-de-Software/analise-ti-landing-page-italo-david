function Footer() {
    return (
        <>
            <footer className="row py-3 px-5 align-items-center" style={{ backgroundColor: 'var(--footer-bg)', color: 'white' }}>

                {/* Left */}
                <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
                    <h6 className="mb-1 fw-semibold" style={{ fontSize: '0.8rem' }}>
                        Fábrica de Software - Engenharia de Software - Univille
                    </h6>
                    <p className="mb-0 text-white-50" style={{ fontSize: '0.7rem' }}>
                        Atividade Acadêmica - Landing Page Estática
                    </p>
                </div>

                {/* right */}
                <div className="col-12 col-md-6 text-center text-md-end">
                    <p className="mb-0 fw-bold" style={{ fontSize: '0.7rem' }}>Ítalo David</p>
                    <small className="text-white-50" style={{ fontSize: '0.65rem' }}>05/08/2026</small>
                </div>

            </footer>
        </>
    )
};

export default Footer; 