function ViewSection() {
    const stats = [
        { value: 23, label: 'Vagas Analisadas' },
        { value: 11, label: 'Vagas Locais (Joinville/SC)' },
        { value: 12, label: 'Vagas Nacionais' },
        { value: 8, label: 'Top Tecnologias Mapeadas' },
    ]

    return (
        <section className="section-main d-flex align-items-center py-5" style={{ minHeight: '60vh', backgroundColor: 'var(--primary-color)'}}>
            <div className="container">

                {/* Title Section */}
                <div className="row text-center text-md-start mb-4">
                    <div className="col-12">
                        <h3 className="fw-bold pb-1 text-white">
                            Visão Geral do Estudo
                        </h3>
                        <p className="text-white mb-0">
                            Dados compilados das vagas analisadas pelo projeto acadêmico da Fábrica de Software.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="row g-4">
                    {stats.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center text-md-start p-4 d-flex flex-column justify-content-center">
                                    <h2 className="display-6 fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>
                                        {item.value}
                                    </h2>
                                    <p className="card-text text-muted small mb-0">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ViewSection;