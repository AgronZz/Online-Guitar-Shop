import guitar from '../assets/guitar.jpeg';
import logo from '../assets/unnamed.png';

export default function Header() {
  return (
    <>
      <div className="brand-logo-title">
        <img src={logo} alt="logo" className="logo-icon" />
        <h3 className="vibe-title">VibeStrings</h3>
      </div>

      <header className="header">
        <div className="header-text">
          <h1>
            Browse top quality <br />
            <span className="org">Guitars</span> online
          </h1>
          <p>
            Explore 50k+ latest collections of branded guitars <br /> online with VibeStrings.
          </p>
        </div>

        <div className="header-image">
          <img src={guitar} alt="Guitar" />
        </div>
      </header>
    </>
  );
}

