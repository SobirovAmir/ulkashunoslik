import React from "react";
import { useNavigate } from "react-router-dom";
import "./ToolsPage.css";

const tools = [
  {
    title: "Space Weather Prediction Center",
    description: "Provides real-time data and forecasts on solar storms and space weather.",
    url: "https://www.swpc.noaa.gov"
  },
  {
    title: "NASA Solar System Exploration Tools",
    description: "A variety of resources to explore planets, moons, and solar physics.",
    url: "https://solarsystem.nasa.gov/tools"
  },
  {
    title: "Sunspot Activity Tracker",
    description: "Track sunspot activity and solar cycles.",
    url: "https://www.spaceweatherlive.com/en/solar-activity.html"
  },
  {
    title: "Space Weather Apps",
    description: "Download mobile apps to monitor space weather and solar events.",
    url: "https://www.spaceweatherlive.com"
  }
];

const ToolsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="tools-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h1 className="page-title">Tools and References for Students</h1>
      <p>Here are some useful tools and resources to help you with solar physics and space weather studies:</p>
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
