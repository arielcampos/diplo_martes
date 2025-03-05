import '../styles/components/pages/Servicios.css'


const Servicios = (props) => {
    return (
        <main>

        <div id="servicios">

            <div className="servicios-container">
                <div className="servicios-titulo">
                    <h2> Nuestros Servicios</h2>
                    <div className="servicios-subtitulo">
                        <p> En nuestra Agencia , nos especializamos en brindar soluciones digitales personalizadas para
                            potenciar su presencia en linea y optimizar sus procesos.</p>
                    </div>
                </div>


                <div className="servicios-container">
                    <div className="servicios-card">
                        <div className="icon">&#9733;</div>
                        <h3>Desarrollo Web </h3>
                        <p>Construimos sitios web modernos y responsivos con las últimas tecnologías.</p>
                    </div>
                    <div className="servicios-card">
                        <div class="icon">&#128187;</div>
                        <h3>Desarrollo de Apps</h3>
                        <p>Creamos aplicaciones móviles para las plataformas iOS y Android.</p>
                    </div>
                    <div className="servicios-card">
                        <div class="icon">&#128188;</div>
                        <h3>Soluciones de Software </h3>
                        <p>Desarrollamos soluciones de software personalizadas adaptadas a las necesidades de su
                            negocio.
                        </p>
                    </div>
                    <div className="servicios-card">
                        <div class="icon">&#128241;</div>
                        <h3> Marketing Digital</h3>
                        <p>Hacemos crecer tu marca con estrategias y campañas de marketing dirigidas.</p>
                    </div>
                    <div className="servicios-card">
                        <div class="icon">&#128202;</div>
                        <h3>Optimizacion SEO</h3>
                        <p>Aumentamos la visibilidad de tu sitio web y mejoramos su posicionamiento en los motores de
                            búsqueda.
                        </p>
                    </div>
                    <div className="servicios-card">
                        <div class="icon">&#128218;</div>
                        <h3>Redaccion de Contentenidos </h3>
                        <p>Creamos contenido de alta calidad para blogs, sitios web y redes sociales</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Servicios;