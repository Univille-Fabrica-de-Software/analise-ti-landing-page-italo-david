import image_dados from '../../assets/image_dados.png'

function HomeSection() {
    return (

        <section className="section-main d-flex align-items-center bg-white" style={{ minHeight: '80vh' }}>
            
            <div className="container">
                <div className="row">
                    
                    {/* Left Column */}
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="title-section fw-bold" style={{ color: 'var(--primary-color)' }}>Panorama do Mercado de Tecnologia</h1>
                        
                        <p className="p-section mb-4 text-secondary">
                            Análise de vagas locais e nacionais para identificar competências, tecnologias e tendências exigidas pelo mercado de trabalho contemporâneo.
                        </p>
               
                        <div>
                            <button type="button" className="btn px-4 py-2 text-white" style={{ backgroundColor: 'var(--secundary-color)' }}>
                                Explorar Vagas
                            </button>
                        </div>
                    </div> 

                    {/* Right Column */}
                    <div className="col-12 col-md-6 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                        <img 
                            src={image_dados} 
                            alt="image_dados" 
                            className="img-fluid"
                        />    
                    </div>  

                </div>
            </div>
        </section>
    );
}

export default HomeSection;