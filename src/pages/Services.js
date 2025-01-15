import ServiceCard from "../components/ServiceCard";
import '../pages/about.css';
function Services ({ isDarkMode }) {
    return(
        <div id="Services" >
            <div className="container">
                <h1 className="title  ">My Services</h1>
                <div className="card-con row">
                    <ServiceCard isDarkMode={isDarkMode} icn = "fa-solid fa-code" skill = "Web Design" dis = "I learn full stack"/>
                    <ServiceCard isDarkMode={isDarkMode} icn = "fa-solid fa-crop-simple" skill = "UI/UX Design" dis = "I learn full stack"/>
                    <ServiceCard isDarkMode={isDarkMode} icn = "fa-brands fa-app-store" skill = "App Design" dis = "I learn full stack"/>
                </div>
            </div>
        </div>
    );
}
export default Services;