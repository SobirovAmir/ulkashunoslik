import { useNavigate } from "react-router-dom";
import "./ToolsPage.css";

const tools = [
  {
    title: "O'lkashunoslik va geografiya bo'yicha manbalar",
    description: "Tashqi va ichki o'lkashunoslik va geografiya manbalari.",
    url: "https://www.safarqand.uz"
  },
  {
    title: "Geografik koordinatalar tizimi",
    description: "Geografik koordinatalar tizimi va uning qo'llanilishi.",
    url: "https://www.youtube.com/watch?v=H3lNVYxkN-Q"
  },
  {
    title: "Atlaslar va kartalar",
    description: "O'lkashunoslik va geografiya bo'yicha atlaslar va kartalar resurslari.",
    url: "https://www.su.uz/atlaslar"
  },
  {
    title: "Tarixiy manbalar",
    description: "O'lkashunoslik va tarixiy manbalar bo'yicha arxiv va onlayn resurslar.",
    url: "https://www.history.uz"
  },
  {
    title: "Geografik ma'lumotlar bazasi",
    description: "Geografik ma'lumotlarni o'rganish va saqlash uchun onlayn resurslar.",
    url: "https://data.gov.uz"
  }
];

const ToolsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="tools-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Orqaga
      </button>
      <h1 className="page-title">O&apos;lkashunoslik va Geografiya bo&apos;yicha foydali manbalar</h1>
      <p>O&apos;lkashunoslik va geografiya bo&apos;yicha foydali manbalar va resurslar:</p>
      <ul className="tools-list">
        {tools.map((tool, index) => (
          <li key={index} className="tool-item">
            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-link">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsPage;
