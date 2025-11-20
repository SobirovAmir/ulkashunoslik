// Footer.js
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-footer">
      <p>Muallif: <strong>Sabirova Nilufar Tairovna</strong></p>
      <p>© {currentYear}. Barcha huquqlar himoyalangan.</p>
    </footer>
  );
};

export default Footer;
