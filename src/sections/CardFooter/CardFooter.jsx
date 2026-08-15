function CardFooter() {
    return (
        <>
            <section className="section-main" style={{ backgroundColor: 'var(--primary-color)' }}>
                <div className="container">
                    <div className="row" >

                        <div className="col-12 mx-auto py-4 px-4 my-5 rounded-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: 'white', width: '80%' }}>
                            <h5 className="fw-bold" style={{ color: 'var(--primary-color)' }}>Síntese do aprendizado</h5>
                            <p className="text-center" style={{ color: 'var(--primary-color)' }}>
                                A análise sistemática das vagas locais e nacionais permite compreender quais conhecimentos técnicos e soft skills devem ser priorizadas na nossa formação profissional para atender com precisão às demandas do mercado.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
};

export default CardFooter;