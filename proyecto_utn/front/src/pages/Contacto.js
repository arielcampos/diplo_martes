const Contacto = (props) => {
    return (
        <div id="servicios">
            <div className="servicios-container" id="contacto">
                <div className="servicios-titulo">
                    <h2> Contáctenos </h2>
                    <div className="servicios-subtitulo">
                        <p> Estamos aquí para ayudarte a llevar tu proyecto al siguiente nivel. Escríbenos y trabajemos
                            juntos en crear soluciones digitales que impulsen tu éxito.</p>
                    </div>
                </div>


                <div className="form-container">
                    <div className="container1">
                        <div className="contact-info">
                            <h4>Direccion:</h4>
                            <p>Serranias N 411</p>
                            <p>San Luis , AR</p>
                        </div>

                        <div className="contact-info">
                            <h4>Telefono:</h4>
                            <p>+54 1234 56 789</p>
                            <p>+54 1234 56 780</p>
                        </div>

                        <div className="contact-info">
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                            <p>email@example.com</p>
                        </div>
                    </div>

                    <div className="container2">
                        <form className="contact-form" method="post" action="">

                            <div className="form-row">
                                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre*" required="required" />
                            </div>
                            <div className="form-row">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email*" required="required"/>
                            </div>

                            <div className="form-row">
                                <input type="text" class="form-control" name="subject" placeholder="Titulo*" required="required" />
                            </div>
                            <div className="form-row">
                                <textarea class="form-control" id="message" name="message" rows="7" placeholder="Escriba su mensaje*" required="required"></textarea>
                            </div>
                            <div className="form-row">
                                <button type="submit" data-text="Send Message">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div> 
       </div> 

    );
}

export default Contacto;