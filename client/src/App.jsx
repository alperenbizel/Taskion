import React, { useState } from 'react'; // useState'i içe aktardık
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPages';
import RegisterPage from './pages/RegisterPages';
import ProfilePage from './pages/ProfilePages';
import NotesPage from './pages/NotesPage';
import ProjectsPage from './pages/ProjectsPages';
import TasksPage from './pages/TasksPages';
import TagsPage from './pages/TagsPages';
import FilesPage from './pages/FilesPages';
import ActivitiesPage from './pages/ActivityPages';
import SharedPage from './pages/SharedPages';
import ProjectDetails from './pages/ProjectDetailPage';
import './services/apiService';

const App = () => {
 
  return (
    <Router>
      <Header /> {/* Header'da toggleSidebar'ı geçiyoruz */}
      <div >

        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/tasks" element={<TasksPage />} />
           
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
