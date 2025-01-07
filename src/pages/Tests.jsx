import { Link } from "react-router-dom";
import "./Tests.css";

const Tests = () => {
  const testFiles = [
    "lesson1.txt",
    "lesson2.txt",
    "lesson3.txt",
    "lesson4.txt",
    "lesson5.txt",
    "lesson6.txt",
    "lesson7.txt",
  ];

  return (
    <div className="tests-container">
      <section className="additional-section">
        <h1 className="hero-title">O&apos;lkashunoslik Testlari</h1>
        <p className="hero-subtitle">
          Hududlarning tabiati, ijtimoiy-iqtisodiy rivojlanishi va madaniy
          boyliklarini o&apos;rganing!
        </p>
      </section>
      
      <div className="test-list">
        <ul>
          {testFiles.map((file, index) => {
            const lessonId = file.replace(".txt", "");
            return (
              <li key={index} className="test-item">
                <Link to={`/tests/${lessonId}`} className="test-link">
                  Ma&apos;ruza {index + 1} Testi
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="test-footer">
        <p>Yaxshi omad va ilmiy sayohat!</p>
      </footer>
    </div>
  );
};

export default Tests;
