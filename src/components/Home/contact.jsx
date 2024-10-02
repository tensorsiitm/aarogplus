import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import PinIcon from "@mui/icons-material/PinDrop";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import FBIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
    return ( <div className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact-wrapper">
            <div className="person">
                <h2>THOMAS GEORGE</h2>
                <h2><i><CallIcon /></i> 044-28505292</h2>
                <h2><i><MailIcon /></i> info@aarogplus.com</h2>
            </div>
            <div className="address">
                <h2><i><PinIcon /></i>Office Address</h2>
                <h3>715-A, 7th Floor, Spencer Plaza,</h3>
                <h3>Mount Road, Anna Salai,</h3>
                <h3>Chennai - 600 002</h3>
            </div>
        </div>
        <div className="links">
            <i><WhatsappIcon fontSize="large" /></i>
            <i><FBIcon fontSize="large"/></i>
            <i><LinkedInIcon fontSize="large" /></i>
        </div>
    </div> );
}

export default Contact;