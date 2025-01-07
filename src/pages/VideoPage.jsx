import { useNavigate } from "react-router-dom";
import "./VideoPage.css";

const VideoPage = () => {
  const navigate = useNavigate();

  // Видеоматериалы по теме "O'lkashunoslik"
  const videos = [
    {
      title: "Samarqand viloyat O'lkashunoslik muzeyi",
      embedId: "L9LbbGkyZWk",
    },
    { title: "O'lkashunoslik muzeyi 3", embedId: "6QuKBUxVjuk" },
    { title: "O'lkashunoslik muzeyi", embedId: "Ge4Rajvw8jY" },
    {
      title: "Buxoro viloyat O'lkashunoslik muzeyi",
      embedId: "449412100509353",
    },
    {
      title: "Tarixiy o'lkashunoslik va turizmning turlari",
      embedId: "f6f1d2c79c2c5a92ce8448e51eee1244",
    },
    { title: "O'lkashunoslik burchagi", embedId: "Vp5i-Tdy3rM" },
    {
      title: "Ismatulla Akaboyev O'lkashunoslik muzeylari",
      embedId: "UCYUT8yDjdmCO0kHE8S18JiA",
    },
    {
      title: "Tarixiy o'lkashunoslik fanining predmeti",
      embedId: "xkFiGXFRInkrhz6f83BZ7AHaKe",
    },
  ];

  return (
    <div className="videos-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        {" "}
        {/* Back button */}
        &larr; Orqaga
      </button>
      <h1 className="page-title">
        O&apos;lkashunoslik va Geografiya Video Materiallari
      </h1>
      <p>
        O&apos;lkashunoslik, geografiya, tabiiy resurslar va iqlim haqida
        o&lsquo;quv materiallarini tomosha qiling.
      </p>
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
