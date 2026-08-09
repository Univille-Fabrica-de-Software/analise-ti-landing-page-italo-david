import DataCard from "../../components/DataCard/DataCard";
import { vagasLocais, vagasNacionais } from "../../data/vagas";

function ColunaVagas({ titulo, cor, vagas }) {
    return (
        /* Estrutura das colunas */
        <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="pb-2 mb-3" style={{ borderBottom: `3px solid ${cor}` }}>
                <h5 className="fw-bold mb-0" style={{ color: cor }}>
                    {titulo}
                </h5>
            </div>

            {/* Lista de Cards */}
            <div className="d-flex flex-column gap-3">
                {vagas.map((vaga, index) => (
                    <DataCard key={`${vaga.titulo}-${index}`} {...vaga} />
                ))}
            </div>
        </div>
    );
}

function JobSection() {
    return (
        <section id="vagas" className="section-main bg-white d-flex align-items-center py-5">
            <div className="container">

                {/* Title Section */}
                <div className="row my-4">
                    <div className="col-12">
                        <h3 className="fw-bold" style={{ color: 'var(--primary-color)' }}>
                            Vagas Analisadas
                        </h3>
                        <p className="text-muted">
                            Comparativo das competências e tecnologias solicitadas em diferentes escalas de atuação.
                        </p>
                    </div>
                </div>

                {/* Job Section Grid (Divide a tela em 2 colunas principais) */}
                <div className="row gx-5">

                    {/* Coluna 1: Mercado Local / Joinville */}
                    <ColunaVagas titulo="Mercado Local / Joinville" cor="var(--primary-color)" vagas={vagasLocais} />

                    {/* Coluna 2: Mercado Nacional */}
                    <ColunaVagas titulo="Mercado Nacional" cor="var(--secundary-color)" vagas={vagasNacionais} />

                </div>

            </div>
        </section>
    );
};

export default JobSection;