
import '../styles/components/pages/Contacto.css'

import { useState } from 'react';
import axios from 'axios';

    const Contacto = (props) => {
    
      const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      }
    
      const [sending, setSending] = useState(false);
      const [msg, setMsg] = useState('');
      const [formData, setFormData] = useState(initialForm);
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
          ...oldData,
          [name]: value // forma dinamica
        }));
      }
    
      const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
          setFormData(initialForm)
        }
      }
    
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
                        <form className="contact-form" method="post" onSubmit={handleSubmit} action="/contacto">

                            <div className="form-row">
                                <input type="text" class="form-control" id="name" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre*" required="required" />
                            </div>
                            <div className="form-row">
                                <input type="email" class="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required="required"/>
                            </div>
                            <div className="form-row">
                                <input type="text" class="form-control" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Telefono*" required="required" />
                            </div>

                            <div className="form-row">
                                <textarea class="form-control" id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}  rows="7" placeholder="Escriba su mensaje*" required="required"></textarea>
                            </div>
                            <div className="form-row">
                                <button type="submit" data-text="Send Message">Enviar </button>
                            </div>
                        </form>
                        {sending ? <p>Enviando...</p> : null }
                        {msg ? <p>Mensaje Enviado! </p> : null }

                    </div>
            </div>
        </div> 
       </div> 

    );
}

export default Contacto;