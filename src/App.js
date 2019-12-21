import React from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="py-5" id="test">
        <ProjectList/>
      </div>
    </div>
  );
}

export default App;
