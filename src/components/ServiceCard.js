
import '../pages/about.css';
const ServiceCard = (props) => {
    const cardStyles = {
        backgroundColor: props.isDarkMode ? "#444" : "#fff",
        color: props.isDarkMode ? "#fff" : "#000",
        border: props.isDarkMode ? "1px solid #666" : "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        transition: "all 0.3s ease",
      };
    return (
            <div style={cardStyles} className="Scard col-12 col-md-6">
                
                <div>
                    <i className={props.icn} id="si"></i>
                    <h1 id="skname">
                        {props.skill}
                    </h1>
                    <p id="skdis">
                        {props.dis}
                    </p>
                    <button id='sl' className='err'>Learn more</button>
                </div>
            </div>
    );
}
export default ServiceCard;