import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoPage.css";

const VideoPage = () => {
  const navigate = useNavigate();  

  const videos = [
    { title: "Understanding Solar Activity", embedId: "h6D1hG0hY-A" },
    { title: "Space Weather Explained", embedId: "bJSnNRIlGfM" },
    { title: "Solar Flares and Coronal Mass Ejections", embedId: "q3HJLWA1oDg" },
    { title: "The Solar Wind", embedId: "2HoTK_Gqi2Q" },
    { title: "The Sun's Magnetic Field", embedId: "libKVRa01L8" },
    { title: "Sunspots and Solar Cycles", embedId: "xYhB6CJwXEw" },
  ];

  return (
    <div className="videos-container">
      <button className="back-button" onClick={() => navigate(-1)}>  {/* Back button */}
        &larr; Back
      </button>
      <h1 className="page-title">Solar Physics and Space Weather Videos</h1>
      <p>Explore a curated collection of videos covering solar phenomena, space weather, and their impact on Earth.</p>
      <div className="video-list">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <h3>{video.title}</h3>
            <iframe
              src={`https://www.youtube.com/embed/${video.embedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
              className="video-frame"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
