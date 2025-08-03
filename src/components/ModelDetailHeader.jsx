import { Link, useParams } from "react-router-dom";
import logo from '../assets/unnamed.png';

export default function ModelDetailHeader({ name, image }) {
  const { brandId } = useParams();

  return (
    <header className="guitar-header">
      <div className="header-left">
        
        <Link to={`/brand/${brandId}`} className="back-home-link">
          ← Back to Brand
        </Link>

        <div className="logo-title">
          <img src={logo} alt="logo" className="logo-icon" />
          <h3 className="vibe-title">VibeStrings</h3>
        </div>

        <h1 className="guitar-name">{name}</h1>
      </div>

      <div className="header-right">
        <div className="guitar-bg">
          <img src={image} alt={name} className="guitar-image" />
          <div className="guitar-notch">
            <img src={logo} alt="logo-notch" />
          </div>
        </div>
      </div>
    </header>
  );
}
