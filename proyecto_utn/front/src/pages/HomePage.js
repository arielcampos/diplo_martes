const HomePage = (props) => {
    return (
        <main>
        <div className="imagen-container">

            <img src="images/principal.png" alt="Imagen Principal" />

 
            <div className="titulo-imagen">
                Desarrollo Web Profesional
            </div>
            <div className="subtitulo-imagen">
                Soluciones de IT
            </div>
            <div className="texto-imagen">
                Contamos con 6 años de experiencia colaborando con empresas de Estados Unidos.
            </div>
            <div className="texto-imagen2">
                Estamos aquí para ayudarte a llevar tu proyecto al siguiente nivel. Escríbenos y trabajemos juntos en
                crear soluciones digitales que impulsen tu éxito.
            </div>

        </div>
        <div className="servicios-container">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Sobre Nosotros</h5>

                    <p className="card-text"> En nuestra Agencia de Desarrollo Web, somos un equipo de expertos apasionados
                        por el desarrollo web y la creación de soluciones digitales a medida.</p>

                </div>
            </div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Nuestra misión</h5>
                    <p className="card-text">Nuestra misión es ayudar a empresas de todos los tamaños a establecer una
                        presencia en línea robusta y efectiva mediante la creación de sitios web innovadores,
                        funcionales y atractivos.</p>


                </div>
            </div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Nuestra forma de trabajo</h5>
                    <p className="card-text">Desde el diseño inicial hasta la implementación final, trabajamos estrechamente
                        con nuestros clientes para comprender sus necesidades y objetivos.</p>


                </div>
            </div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Nuestro Enfoque</h5>
                    <p className="card-text">Con un enfoque centrado en el usuario y en las mejores prácticas de desarrollo,
                        garantizamos que cada proyecto no solo sea visualmente impresionante, sino también altamente
                        funcional y optimizado para el rendimiento.</p>
                </div>
            </div>

        </div>
    </main>
    );
}

export default HomePage;