import React from 'react';
import Header from './components/Header';
import HomeSection from './components/sections/home/HomeSection';
import ExperienceSection from './components/sections/experience/ExperienceSection';
import ProjectSection from './components/sections/projects/ProjectSection';
import SkillseSection from './components/sections/skills/SkillsSection';
import CourseworkSection from './components/sections/coursework/CourseworkSection';
import VoluntterSection from './components/sections/volunteer/VolunteerSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <HomeSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillseSection />
        <CourseworkSection />
        <VoluntterSection />
      </div>
    </div>
  )
}

export default App;
