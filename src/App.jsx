import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Materials from './pages/Materials';
import Tests from './pages/Tests';
import TestPage from './pages/TestPage'; // Создайте компонент для отображения теста по уроку

import Resources from './pages/Resources';
import Lesson from "./pages/Lesson"; 

import Glossary from "./pages/Glossary";
import VideoPage from "./pages/VideoPage";
import ToolsPage from "./pages/ToolsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:lessonId" element={<Lesson />} />

        <Route path="/tests" element={<Tests />} /> 
        <Route path="/tests/:lessonId" element={<TestPage />} />

        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/glossary" element={<Glossary />} />
        <Route path="/resources/videos" element={<VideoPage />} />
        <Route path="/resources/tools" element={<ToolsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

