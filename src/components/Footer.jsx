import facebook from '../assets/facebook-app-symbol.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import pin from '../assets/pin.png';
import logo from '../assets/unnamed.png';
import email from '../assets/email.png';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-bottom">
            <div className="footer-top">
                <ul className="contact-info">
                <li className="logo-title">
                    <img className="logo" src={logo} alt="logoVibeString" />
                    <h3>VibeStrings</h3>
                </li>
                <li>
                    <img className="icon" src={email} alt="logoEmail" />
                    <p>Enquiry@VibeStrings</p>
                </li>
                <li>
                    <img className="icon" src={pin} alt="LocationLogo" />
                    <p>San Francisco</p>
                </li>
                </ul>
            </div>

            <div className="footer-section">
            <h4>PAGES</h4>
            <ul>
                <li>Store</li>
                <li>Collections</li>
                <li>Support</li>
            </ul>
            </div>

            <div className="footer-section">
            <h4>PRODUCT</h4>
            <ul>
                <li>Guitars</li>
                <li>Accessories</li>
                <li>Bundles</li>
            </ul>
            </div>

            <div className="footer-section">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
                <img className="icon" src={facebook} alt="Facebook" />
                <img className="icon" src={twitter} alt="Twitter" />
                <img className="icon" src={instagram} alt="Instagram" />
            </div>
            </div>
      </div>

      <p className="copyright">&copy; 2022 Copyright. VibeStrings</p>
    </footer>
  );
}
