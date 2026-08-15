function FinalSection() {
    return (
        <section className="section-main py-5">
            <div className="container">

                {/* Cabeçalho da Seção */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h3 className="fw-bold" style={{ color: 'var(--primary-color)' }}>
                            O que o mercado está exigindo?
                        </h3>
                        <p className="text-muted">
                            Análise qualitativa dos principais requisitos identificados no estudo de mercado.
                        </p>
                    </div>
                </div>

                {/* Grid de Cards (g-4 aplica o espaçamento correto entre as colunas) */}
                <div className="row g-4 mb-5">

                    {/* Card 1: Competências Técnicas */}
                    <div className="col-12 col-md-4">
                        <div className="card h-100 border-2" style={{ borderColor: 'var(--secundary-color)' }}>
                            <div className="card-body">
                                <h6 className="fw-bold">Competências Técnicas</h6>
                                <p className="text-muted small mb-0">
                                    Fundamentos pesam mais que stack: Git aparece em 78% das vagas e APIs em 61%, à frente de qualquer linguagem isolada. JavaScript lidera com 52%, seguido de PHP, Java e C#. Banco relacional em 57%.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Competências Comportamentais */}
                    <div className="col-12 col-md-4">
                        <div className="card h-100 border-2" style={{ borderColor: 'var(--primary-color)' }}>
                            <div className="card-body">
                                <h6 className="fw-bold">Competências Comportamentais</h6>
                                <p className="text-muted small mb-0">
                                    Comunicação e trabalho em equipe são o denominador comum, citados em 70% das descrições — independentemente de nível, stack ou região. Proatividade com ownership vem em segundo, em 26%.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Local vs Nacional */}
                    <div className="col-12 col-md-4">
                        <div className="card h-100 border-2" style={{ borderColor: 'var(--alt-text)' }}>
                            <div className="card-body">
                                <h6 className="fw-bold">Local vs Nacional</h6>
                                <p className="text-muted small mb-0">
                                    Joinville pede desenvolvimento web (JavaScript em 8 das 11 vagas) e concentra as vagas de entrada, todas presenciais ou híbridas. O nacional remoto pede Java, C# e nuvem, com senioridade mais alta.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default FinalSection;