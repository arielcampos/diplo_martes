const Portfolio = (props) => {
    return (

        <div id="servicios">
            <div className="servicios-container" id="portfolio">
                <div className="servicios-titulo">
                    <h2> Nuestro Portfolio</h2>
                </div>
                <div className="servicios-subtitulo">
                    <p> Explore nuestros proyectos destacados y descubra cómo hemos transformado ideas en soluciones
                        digitales impactantes.
                        Cada desarrollo refleja nuestra pasión por la excelencia y el compromiso con los resultados.</p>
                </div>
                <div className="portfolio-card">
                    <img src="images/portfolio1.jpg" width="350px" height="230px" alt="Imagen1" />
                    <div class="texto-en-imagen">
                        Proyecto 1
                    </div>

                </div>

                <div className="portfolio-card">
                    <img src="images/portfolio2.jpg" width="350px height=230px" alt="Imagen2" />
                    <div class="texto-en-imagen">
                        Proyecto 2
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src="images/portfolio3.jpg" width="350px" height="230px" alt="Imagen3" />
                    <div class="texto-en-imagen">
                        Proyecto 3
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src="images/portfolio4.jpg" width="350px" height="230px" alt="Imagen4" />
                    <div class="texto-en-imagen">
                        Proyecto 4
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src="images/portfolio5.jpg" width="350px" height="230px" alt="Imagen5" />
                    <div className="texto-en-imagen">
                        Proyecto 5
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src="images/portfolio6.jpg" width="350px" height="230px" alt="Imagen6" />
                    <div className="texto-en-imagen">
                        Proyecto 6
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Portfolio;