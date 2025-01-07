import { Link } from "react-router-dom";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources-container">
     <section className="additional-section">
      <h1 className="resources-title">Manbalar</h1>
      <p className="resources-intro">
        Bilimingizni oshirish va hududlar haqida ko&apos;proq ma&apos;lumot olish uchun foydali materiallar, vositalar va havolalarni o&apos;rganing.
      </p>
      </section>

      <div className="resources-list">
        <ul>
          <li className="resource-item">
            <Link to="/resources/glossary" className="resource-link">
              Glossariy
            </Link>
          </li>
          <li className="resource-item">
            <Link to="/resources/videos" className="resource-link">
              Video Materiallar
            </Link>
          </li>
          <li className="resource-item">
            <Link to="/resources/tools" className="resource-link">
              Vositalar va Havolalar
            </Link>
          </li>
        </ul>
      </div>

      <section className="additional-section">
        <h2>Nima uchun ushbu manbalardan foydalanish kerak?</h2>
        <p>
          Ushbu materiallar keng qamrovli bilim va ko&apos;rsatmalarni taqdim etadi. 
          Boshlovchi bo&apos;lasizmi yoki tajribali mutaxassis, o&apos;z mahoratingizni oshirish uchun foydali ma&apos;lumotlarni topasiz.
        </p>
      </section>
    </div>
  );
};

export default Resources;
