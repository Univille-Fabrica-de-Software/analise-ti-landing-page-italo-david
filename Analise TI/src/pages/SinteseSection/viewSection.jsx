function ViewSection() {
    return (
        <>
            <section className="section-main bg-light d-flex align-items-center py-5">

                <div className="container">
                    <div className="row">

                        {/* Title section */}
                        <div className="row text-center text-md-start">
                            <div className="col-12">
                                <h1 className="fw-bold fs-2" style={{ color: 'var(--primary-color)' }}>Visão Geral do Estudo</h1>
                                <p className="text-muted">Dados compilados das vagas analisadas pelo projeto acadêmico da Fábrica de Software.</p>
                            </div>
                        </div>

                        {/* Cards section */}
                        <div className="row g-4 text-center">

                            {/* Card 1 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body text-md-start px-4">
                                        <h1 className="display-6 fw-bold" style={{ color: 'var(--primary-color)' }}>23</h1>
                                        <span className="text-muted">Vagas Analisadas</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body text-md-start px-4">
                                        <h1 className="display-6 fw-bold" style={{ color: 'var(--primary-color)' }}>11</h1>
                                        <span className="text-muted">Vagas Locais (Joinville/SC)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body text-md-start px-4">
                                        <h1 className="display-6 fw-bold" style={{ color: 'var(--primary-color)' }}>12</h1>
                                        <span className="text-muted">Vagas Nacionais</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body text-md-start px-4">
                                        <h1 className="display-6 fw-bold" style={{ color: 'var(--primary-color)' }}>4+</h1>
                                        <span className="text-muted">Top Tecnologias Mapeadas</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        </>
    )
};

export default ViewSection;