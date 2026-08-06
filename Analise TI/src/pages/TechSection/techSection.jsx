function techSection() {
    return (
        <>
            <section className="bg-light">

                <div className="container">
                    <div className="row">

                        <div className="col-12 mt-5">
                            <h1 className="fw-bold mb-2 fs-2" style={{ color: 'var(--primary-color)' }}>Tecnologias Mais Citadas</h1>
                            <span className="text-muted">Ranking de ferramentas, linguagens e frameworks mais requisitados nas descrições de vagas</span>
                        </div>

                        <div className="row d-flex mt-4 mb-4 col-12 col-md-6">
                            <div className="col-12">
                                <h6 className="fw-bold">Competências Mapeadas</h6>
                            </div>

                            <div className="d-flex align-items-center mt-2 gap-2">

                                <span className="bg-white px-2 py-1 rounded-pill border fw-bold" style={{ fontSize: '0.6rem', color: 'var(--primary-color)' }}>JavaScript</span>

                                <span className="bg-white px-2 py-1 rounded-pill border fw-bold" style={{ fontSize: '0.6rem', color: 'var(--primary-color)' }}>Java</span>

                                <span className="bg-white px-2 py-1 rounded-pill border fw-bold" style={{ fontSize: '0.6rem', color: 'var(--primary-color)' }}>PHP</span>

                                <span className="bg-white px-2 py-1 rounded-pill border fw-bold" style={{ fontSize: '0.6rem', color: 'var(--primary-color)' }}>Git</span>

                                <span className="bg-white px-2 py-1 rounded-pill border fw-bold" style={{ fontSize: '0.6rem', color: 'var(--primary-color)' }}>Banco de Dados</span>

                                <span className="bg-white px-2 py-1 rounded-pill border fw-bold" style={{ fontSize: '0.6rem', color: 'var(--primary-color)' }}>Laravel</span>

                                <span className="bg-white px-2 py-1 rounded-pill border fw-bold" style={{ fontSize: '0.6rem', color: 'var(--primary-color)' }}>MySQL</span>

                            </div>
                        </div>

                        <div className="row col-12 col-md-6">
                            <div></div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
};

export default techSection;