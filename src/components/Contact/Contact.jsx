import react from "react";
import './Contact.css';
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import contactVector from "./../../assets/about_vector.png"
import github from "./../../assets/gh.png"
import linkedin from "./../../assets/li.png"
import instagram from "./../../assets/in.png"
import web from "./../../assets/web.png"

const Contact = () =>{
    return(
        <div className="section-container">
            <Header heading="Get in touch" details="Feel free to contact me" />
            <div className="contact-from-container">
                <form className="contact-from">
                    <input type="email"
                        placeholder="Your email Id"
                        name="email"
                        className="input-box email-input" />
                    <textarea
                        type="text"
                        placeholder="Your message"
                        name="message"
                        className="input-box body-input"/>
                    <button type="submit"
                        className="contact-btn">
                            send email
                        </button>
                </form>
            </div>

            <div className="social-icons-container">
                <a href="http://github.com" className="social-icon">
                    <img src={github} alt="scoial"/>
                </a>
                <a href="http://instagram.com" className="social-icon">
                    <img src={instagram} alt="scoial"/>
                </a>
                <a href="http://linkedin.com/in" className="social-icon">
                    <img src={linkedin} alt="scoial"/>
                </a>
                <a href="http://github.com" className="social-icon">
                    <img src={web} alt="scoial"/>
                </a>
            </div>

            <FooterLink phrase="Read more " link="about me" toaddress="/about"/>
            <div className="vector-frame">
                <img src={contactVector} alt="contactVector" className="about-vector" />
            </div>
        </div>
    )
}

export default Contact;