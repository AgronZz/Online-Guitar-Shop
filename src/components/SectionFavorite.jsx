import appstore from '../assets/appstore.png';
import googleplay from '../assets/googleplay.png';
import figma from '../assets/figma.png';

export default function SectionFavorite() {
  return (
    <section className="favorite-section">
      <div className="favorite-text">
        <h1>
          Browse and buy your <br />
          <span className="org">favorite guitars with</span>
          <br />
          VibeStrings.
        </h1>

        <div className="store-buttons">
          <img src={googleplay} alt="Google Play" />
          <img src={appstore} alt="App Store" />
        </div>
      </div>

      <div className="favorite-image">
        <img src={figma} alt="Guitar Product Showcase" />
      </div>
    </section>
  );
}
