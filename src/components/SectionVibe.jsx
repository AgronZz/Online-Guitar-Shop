import app from '../assets/app.png';
import delivery from '../assets/express-delivery.png';
import wallet from '../assets/wallet.png';

export default function SectionVibe() {
  return (
    <section className="vibe-section">
      <h2>
        Why try <span className="org">VibeStrings?</span>
      </h2>

      <ol className="vibe-list">
        <li>
          <img src={app} alt="small icon" />
          <h3>SMOOTH BROWSING</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet <br />
            Consectur Adipiscing Elit.
          </p>
        </li>

        <li>
          <img src={delivery} alt="small icon" />
          <h3>EASY DELIVERY</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet <br />
            Consectur Adipiscing Elit.
          </p>
        </li>

        <li>
          <img src={wallet} alt="small icon" />
          <h3>SWIFT PAYMENTS</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet <br />
            Consectur Adipiscing Elit.
          </p>
        </li>
      </ol>
    </section>
  );
}
