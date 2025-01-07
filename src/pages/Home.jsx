import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">O&apos;lkashunoslik va Mintaqaviy Tadqiqotlar</h1>
        <p className="hero-subtitle">
          Hududlarning tabiati, ijtimoiy-iqtisodiy rivojlanishi va madaniy boyliklarini kashf eting!
        </p>
      </section>

      {/* Navigation Section */}
      <nav className="nav-section">
        <Link to="/materials" className="nav-card">
          <h2>Ma&apos;ruza</h2>
          <p>Geografik materiallar va hududlarni o&apos;rganish bo&apos;yicha batafsil ma&apos;lumotlar.</p>
        </Link>
        <Link to="/tests" className="nav-card">
          <h2>Testlar</h2>
          <p>Bilimingizni tekshirish uchun qiziqarli testlar.</p>
        </Link>
        <Link to="/resources" className="nav-card">
          <h2>Manbalar</h2>
          <p>Qo&apos;shimcha materiallar va manbalar bilan tanishing.</p>
        </Link>
      </nav>

      {/* Information Section */}
      <section className="info-section">
        <div className="info-content">
          <h2>O&apos;lkashunoslikning Ahamiyati</h2>
          <p>
            O&apos;lkashunoslik orqali hududlarning tabiiy resurslari, iqtisodiy imkoniyatlari va madaniy
            boyliklari haqida kengroq ma&apos;lumot olish imkoniyatiga ega bo&apos;lasiz.
          </p>
        </div>
        <img
          src="/uzbekistan-landscape.webp"
          alt="Uzbekistan Landscape"
          className="info-image"
        />
      </section>
    </div>
  );
};

export default Home;
