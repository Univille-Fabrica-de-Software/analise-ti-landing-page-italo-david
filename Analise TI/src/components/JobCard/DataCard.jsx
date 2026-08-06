function DataCard({ titulo, modalidade, tags, skill }) {

    const getBadge = (tipo) => {
        switch (tipo) {
            case 'Home Office':
            case 'Remoto':
                return "bg-info-subtle text-info-emphasis";
            case 'Híbrido':
                return "bg-warning-subtle text-warning-emphasis";
            case 'Presencial':
            default:
                return "bg-success-subtle text-success-emphasis";
        }
    };

    return (
        <>
            <div className="col-12 col-md-6 mb-3 w-100">
                <div className="card w-100 shadow-sm border-1">
                    <div className="card-body">

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h5 className="fw-bold fs-5 mb-0 text-dark">{titulo}</h5>
                            <span className={`badge px-3 py-2 fw-semibold ${getBadge(modalidade)}`}>
                                {modalidade}
                            </span>
                        </div>

                        <div className="d-flex flex-wrap gap-2 mb-1">
                            {tags.map((tech, index) => (
                                <span key={index} className="badge bg-light text-secondary border px-3 mb-2 mt-2 py-1 fw-normal">{tech}</span>
                            ))}
                        </div>

                        <div className="d-flex">
                            <span style={{ fontSize: '0.9rem' }}>Skill:<strong> {skill}</strong></span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default DataCard;