// Footer Component
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="row1" className="row ">
                    <a
                        href="https://www.linkedin.com/in/amandeep-rewani-210b2b1b6/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/Amandeep-2624"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div id="row1" className="row">
                    © Developed By Amandeep Rewani
                </div>
            </div>
        </footer>
    );
};

export default Footer;
