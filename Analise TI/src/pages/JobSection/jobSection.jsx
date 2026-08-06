import DataCard from "../../components/JobCard/DataCard";

function JobSection() {
    return (
        <section className="section-main bg-white d-flex align-items-center py-5">
            <div className="container">

                {/* Title Section */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1 className="fw-bold fs-2" style={{ color: 'var(--primary-color)' }}>
                            Vagas Analisadas
                        </h1>
                        <p className="text-muted">
                            Comparativo das competências e tecnologias solicitadas em diferentes escalas de atuação.
                        </p>
                    </div>
                </div>

                {/* Job Section Grid (Divide a tela em 2 colunas principais) */}
                <div className="row gx-5">

                    {/* Coluna 1: Mercado Local / Joinville */}
                    <div className="col-12 col-md-6">

                        <div className="pb-2 mb-3" style={{ borderBottom: '3px solid var(--primary-color)' }}>
                            <h2 className="fw-bold fs-4 mb-0" style={{ color: 'var(--primary-color)' }}>
                                Mercado Local / Joinville
                            </h2>
                        </div>

                        {/* Lista de Cards Locais */}
                        <div className="d-flex flex-column gap-3">
                            <DataCard
                                titulo='Engenheiro de Software - BackEnd'
                                modalidade='Híbrido'
                                tags={["JavaScript"]}
                                skill="Colaboração com o time "
                            />

                            <DataCard
                                titulo='Desenvolvedor C#'
                                modalidade='Híbrido'
                                tags={["C#"]}
                                skill="Comunicação com usuários e stakeholders"
                            />

                            <DataCard
                                titulo='Desenvolvedor Backend | Júnior'
                                modalidade='Híbrido'
                                tags={["PHP", "JavaScript"]}
                                skill="	Comunicação clara e trabalho em equipe"
                            />

                            <DataCard
                                titulo='Software Engineer'
                                modalidade='Híbrido'
                                tags={["PHP", "Goland"]}
                                skill="Colaboração com designers, PMs e devs"
                            />

                            <DataCard
                                titulo='Desenvolvedor Frontend'
                                modalidade='Home Office'
                                tags={["PHP", "Goland"]}
                                skill="Proatividade com ownership mindset"
                            />

                            <DataCard
                                titulo='Estágio em QA/Teste'
                                modalidade='Presencial'
                                tags={["HTML", "PHP"]}
                                skill="Comunicação escrita para documentar bugs"
                            />

                            <DataCard
                                titulo='Desenvolvedor Web - Backend'
                                modalidade='Home Office'
                                tags={["PHP", "Go", "JavaScript"]}
                                skill="Proatividade com ownership mindset"
                            />

                            <DataCard
                                titulo='Desenvolvedor FullStack PL'
                                modalidade='Home Office'
                                tags={["PHP", "JavaScript"]}
                                skill="Boa comunicação e espírito de equipe"
                            />

                            <DataCard
                                titulo='Desenvolvedor Node.js Pleno'
                                modalidade='Presencial'
                                tags={["JavaScript/TypeScript"]}
                                skill="	Autonomia para desenhar soluções do zero "
                            />

                            <DataCard
                                titulo='Analista de Sistemas'
                                modalidade='Presencial'
                                tags={["Java", "JavaScript", "SQL"]}
                                skill="Colaboração em ambiente ágil"
                            />

                            <DataCard
                                titulo='[TECH] Engenharia de Software Pleno'
                                modalidade='Híbrido'
                                tags={["Java", "JavaScript"]}
                                skill="	Mentoria de desenvolvedores menos experientes "
                            />
                        </div>
                    </div>

                    {/* Coluna 2: Mercado Nacional */}
                    <div className="col-12 col-md-6">

                        <div className="pb-2 mb-3" style={{ borderBottom: '3px solid var(--secundary-color)' }}>
                            <h2 className="fw-bold fs-4 mb-0" style={{ color: 'var(--secundary-color)' }}>
                                Mercado Nacional
                            </h2>
                        </div>

                        {/* Lista de Cards Nacionais */}
                        <div className="d-flex flex-column gap-3">
                            <DataCard
                                titulo='Programador Júnior'
                                modalidade='Remoto'
                                tags={["C#"]}
                                skill="Contato com o cliente por e-mail"
                            />

                            <DataCard
                                titulo='Desenvolvedor Frontend REMOTE'
                                modalidade='Híbrido'
                                tags={["JavaScript", "HTML", "CSS", "PHP"]}
                                skill="Proatividade com ownership mindset"
                            />

                            <DataCard
                                titulo='Pessoa Desenvolvedora JAVA (BE)'
                                modalidade='Remoto'
                                tags={["Java"]}
                                skill="Ownership do produto"
                            />

                            <DataCard
                                titulo='Desenvolvedor FullStack'
                                modalidade='Remoto'
                                tags={["Java", "JavaScript"]}
                                skill="Resolução de problemas"
                            />

                            <DataCard
                                titulo='FullStack'
                                modalidade='Home Office'
                                tags={["SQL"]}
                                skill="Colaboração e programação em pares"
                            />

                            <DataCard
                                titulo='Desenvolvedor Backend Pleno'
                                modalidade='Remoto'
                                tags={["PHP", "JavaScript"]}
                                skill="Resolução de problemas"
                            />

                            <DataCard
                                titulo='Desenvolvedor Web Jr'
                                modalidade='Híbrido'
                                tags={["C#", ".NET"]}
                                skill="Colaboração com times multifuncionais"
                            />

                            <DataCard
                                titulo='FullStack Web Developer'
                                modalidade='Home Office'
                                tags={["C#", "Python"]}
                                skill="Comunicação em inglês (nível 5/5)"
                            />

                            <DataCard
                                titulo='Desenvolvedor Web Junior'
                                modalidade='Home Office'
                                tags={["JavaScript"]}
                                skill="Proatividade, responsabilidade e organização"
                            />

                            <DataCard
                                titulo='Senior Software Developer'
                                modalidade='Remoto'
                                tags={["Python"]}
                                skill="Comunicação e colaboração entre times"
                            />

                            <DataCard
                                titulo='Analista de Desenvolvimento JAVA'
                                modalidade='Híbrido'
                                tags={["Java"]}
                                skill="Resiliência e empreendedorismo"
                            />

                            <DataCard
                                titulo='Desenvolvedor Java'
                                modalidade='Remoto'
                                tags={["Java"]}
                                skill="Resolução de problemas"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default JobSection;