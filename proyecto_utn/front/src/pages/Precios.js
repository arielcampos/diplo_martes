import '../styles/components/pages/Precios.css'


const Precios = (props) => {
    return (
        <main className="precios-holder">
        <div className="precios-titulo">
            <h2> Pricing Plans</h2>
        </div>
        <div className="precios-titulo">
            <h3> Subtitulo </h3>
        </div>

        <div className="precios-container">
            <div className="precios-card">
                <p className="plan">Basico</p>
                <p className="precio"> $ 25 </p>
                <p> 5GB de espacio</p>
                <p> 1 nombre de dominio</p>
                <p> SSL gratis</p>
                <p> Backups incluidos </p>
                <p> 1 cuenta de email</p>
                <p> soporte tecnico</p>
                <a className="boton"> Contratar Ahora</a>
            </div>

            <div className="precios-card">
                <p className="plan">Estandard</p>
                <p className="precio"> $ 50 </p>
                <p> 5GB de espacio</p>
                <p> 1 nombre de dominio</p>
                <p> SSL gratis</p>
                <p> Backups incluidos </p>
                <p> 1 cuenta de email</p>
                <p> soporte tecnico</p>
                <a class="boton"> Contratar Ahora</a>
            </div>

            <div className="precios-card">
                <p className="plan">Premium</p>
                <p className="precio"> $ 100 </p>
                <p> 5GB de espacio</p>
                <p> 1 nombre de dominio</p>
                <p> SSL gratis</p>
                <p> Backups incluidos </p>
                <p> 1 cuenta de email</p>
                <p> soporte tecnico</p>
                <a className="boton"> Contratar Ahora</a>
            </div>
        </div>
    </main>
    );
}

export default Precios;