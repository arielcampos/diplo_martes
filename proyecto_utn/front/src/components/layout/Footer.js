import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer class="footer">
        <div class="footer-container">
            <p>&copy; 2025 Agencia de Desarrollo Web. Todos los derechos reservados.</p>
            <div class="social-icons">
                <a href="#" target="_blank">Facebook</a>
                <a href="#" target="_blank">Twitter</a>
                <a href="#" target="_blank">Instagram</a>
                
            </div>
            <br/>
            <div>
                <p>Serranias Norte 411, San Luis 5883</p>
                <p>Tel : 123 456 789</p>
                <p> mail : desarrollo@web.com</p>
            </div>
        </div>
    </footer>
        
    );
}

export default Footer;