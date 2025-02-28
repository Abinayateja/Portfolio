import ServiceCard from "../components/ServiceCard";
import '../pages/about.css';
function Services ({ isDarkMode }) {
    return(
        <div id="Services" >
            <div className="container">
                <h1 className="title  ">My Services</h1>
                <div className="card-con row">
                    <ServiceCard isDarkMode={isDarkMode} icn = "fa-solid fa-code" skill = "Web Design" dis = "Crafting modern, responsive, and visually stunning websites that enhance brand identity and user engagement."/>
                    <ServiceCard isDarkMode={isDarkMode} icn = "fa-solid fa-crop-simple" skill = "UI/UX Design" dis = "Designing intuitive, user-friendly interfaces with seamless interactions to maximize user satisfaction and conversion rates."/>
                    <ServiceCard isDarkMode={isDarkMode} icn = "fa-brands fa-app-store" skill = "App Design" dis = "Creating sleek, high-performance mobile and web app designs that deliver an exceptional user experience and functionality."/>
                </div>
            </div>
        </div>
    );
}
export default Services;
