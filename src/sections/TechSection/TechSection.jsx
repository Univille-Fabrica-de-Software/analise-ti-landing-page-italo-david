function TechSection() {

    // Ranking de tecnologias — ordenado do maior para o menor automaticamente
    const tecnologias = [
        { nome: 'JavaScript', total: 12 },
        { nome: 'PHP', total: 7 },
        { nome: 'Java', total: 6 },
        { nome: 'C#', total: 4 },
        { nome: 'Python', total: 2 },
        { nome: 'Git', total: 18 },
        { nome: 'API REST', total: 14 },
        { nome: 'MySQL', total: 13 },
    ].sort((a, b) => b.total - a.total);

    // Maior valor = barra cheia (100%)
    const maxTotal = Math.max(...tecnologias.map((t) => t.total));

    return (
        <>
            <section id="panoramas" style={{ minHeight: '60vh', backgroundColor: 'var(--primary-color)' }}>
                <div className="container">
                    <div className="row py-4">

                        {/* Left Column */}
                        <div className="col-12 col-md-6 pt-5 d-flex flex-column align-items-center gap-3">

                            {/* Header */}
                            <div>
                                <h3 className="fw-bold mb-1 text-white">
                                    Tecnologias Mais Citadas
                                </h3>
                                <p className="text-white mb-0 small">
                                    Ranking de ferramentas, linguagens e frameworks mais requisitados nas descrições de vagas.
                                </p>
                            </div>

                            {/* Subtitle */}
                            <div className="mt-4">
                                <h6 className="fw-bold mb-0 text-white">Competências Mapeadas</h6>
                            </div>

                            <div className="d-flex flex-wrap align-items-center gap-2">
                                {['API REST', 'JavaScript', 'Java', 'PHP', 'Git', 'Banco de Dados', 'C#', 'MySQL'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="badge bg-white border rounded-pill fw-bold px-2 py-1"
                                        style={{ color: 'var(--secundary-color)', fontSize: '0.7rem' }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="col-12 col-md-6 mt-4 mb-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    {tecnologias.map((tech) => (
                                        <div key={tech.nome} className="mb-3">
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="fw-semibold" style={{ fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                                                    {tech.nome}
                                                </span>
                                                <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                                                    {tech.total} vagas
                                                </span>
                                            </div>
                                            <div style={{ height: '10px', backgroundColor: 'var(--border-color)', borderRadius: '999px' }}>
                                                <div
                                                    style={{
                                                        width: `${(tech.total / maxTotal) * 100}%`,
                                                        height: '100%',
                                                        backgroundColor: 'var(--secundary-color)',
                                                        borderRadius: '999px',
                                                        transition: 'width 0.6s ease',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default TechSection;