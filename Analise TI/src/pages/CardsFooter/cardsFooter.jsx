function CardsFooter() {
    return (
        <>
            <section className="section-main">

                <div className="container">
                    <div className="row">

                        <div className="col-12 mt-5 mb-3">
                            <h4 className="fw-bold" style={{ color: 'var(--primary-color)' }}>O que o mercado está exigindo?</h4>
                            <span className="text-muted">Análise qualitativa dos principais requisitos identificados no estudo de mercado.</span>
                        </div>

                        <div className="mb-5 d-flex align-itemns-center justify-content: space-between gap-3">
                            <div className="card col-12 col-md-4 border-2" style={{ borderColor: 'var(--secundary-color)' }}>
                                <div className="card-body">
                                    <h6 className="fw-bold">Competências Técnicas</h6>
                                    <span className="text-muted" style={{ fontSize: '0.6rem' }}></span>
                                </div>
                            </div>
                            <div className="card col-12 col-md-4 border-2" style={{ borderColor: 'var(--primary-color)' }}>
                                <div className="card-body">
                                    <h6 className="fw-bold">Competências Comportamentais</h6>
                                    <span className="text-muted" style={{ fontSize: '0.6rem' }}></span>
                                </div>
                            </div>
                            <div className="card col-12 col-md-4 border-2" style={{ borderColor: 'var(--alt-text)' }}>
                                <div className="card-body">
                                    <h6 className="fw-bold">Local vs Nacional</h6>
                                    <span className="text-muted" style={{ fontSize: '0.6rem' }}></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default CardsFooter;