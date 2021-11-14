import react from "react";
import Header from "../Header/Header";
import './About.css';
import aboutvector from "./../../assets/about_vector.png"
import aboutanime from "./../../assets/about_anime.gif"
import FooterLink from "../FooterLink/FooterLink";

const About = () =>{
    return(
        <div className="section-container">
            <Header heading="About page"
            details="Details of about page" />
            <div className="about-main">
                <div className="about-main-left">
                    <h3 className="about-sub-head">
                        Heading of topic
                    </h3>
                    <p className="about-details">
                        Detail more details in details about details details Teaching is my passion, till now, I've taught thousands
                        of students about Programming and Web Development. Check
                        out{' '}
                    </p>

                    <h3 className='about-sub-head'>Teacher</h3>
                    <p className='about-details'>
                        Teaching is my passion, till now, I've taught thousands
                        of students about Programming and Web Development. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='http://theleanprogrammer.com/aam'
                        >
                            my free react courses!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        I've been writing blogs from around 3 years now, and
                        became top-blogger on medium twice. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://madhavbahl.medium.com/'
                        >
                            my medium blogs today!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        more than 75 events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>
                <div className="about-main-right">
                    <img src={aboutanime} alt="about image"></img>
                </div>
            </div>
            <FooterLink 
                phrase="check out my "
                link = "projects"
                toaddress = "/projects"
            />
            <div className ="vector-frame">
                <img src={aboutvector} className="about-vector" alt="about vector"></img>
            </div>
        </div>
        
    )
}

export default About;
