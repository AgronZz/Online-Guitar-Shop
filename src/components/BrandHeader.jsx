import { Link } from "react-router-dom";
import logo from '../assets/unnamed.png';

export default function BrandHeader({ image, name }) {
  return (
    
    <header className="brand-header">
      
      <div className="brand-left">
        <Link to="/" className="back-home-link">← Back to Home</Link>
        <div className="brand-logo-title">
          <img src={logo} alt="logo" className="logo-icon" />
          <h3 className="vibe-title">VibeStrings</h3>
        </div>

        <div className="brand-text">
          <h1>
            Play like a <span className="org">Rock star</span>
          </h1>
          <p>
            With a legacy dating back to the 1950s, <strong>{name}</strong> blends expert <br />
            craftsmanship with cutting-edge innovation to deliver guitars that <br />
            inspire creativity and elevate your performance. Trusted by top <br />
            artists worldwide, <strong>{name}</strong> guitars are built to play fast, sound bold, <br />
            and stand out on any stage. <br />
            Ask ChatGPT
          </p>
        </div>
      </div>

      <div className="brand-right">
        <img src={image} alt={name} className="brand-image" />
      </div>
    </header>
  );
}
