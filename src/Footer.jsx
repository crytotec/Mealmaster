import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import './style/Footer.css';


function Footer() {
    return(
        <div>
        <div className='footer'>
            <div>
            <h1 className='text'>Mealmaster</h1>
            <p>Mealmaster, launched in January 2025, is a revolutionary service dedicated to promoting healthy eating habits. By offering personalized meal plans and detailed descriptions of nutritious foods, Mealmaster empowers individuals to make informed dietary choices that seamlessly integrate into their daily routines, enhancing both health and culinary enjoyment.</p>
            </div>           
             <div className='icon'>
            <a href=''>
            <FaFacebook/>
            </a>
            <a href=''>
            <FaTwitter/>
            </a>
            <a href=''>
            <FaInstagram/>
            </a>
            <a href=''>
            <FaWhatsapp/>
            </a>
            <a href=''>
            <FaLinkedin/>
            </a>
            </div>
            <p>&#169; 2025 Crytotec. All rights reserved</p>
        </div>
      </div>  
    )
}
export default Footer