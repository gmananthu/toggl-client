import './App.css';
import { useMemo, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Navbars from './components/navbar/Navbars';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Projects from './components/projects/Projects';
import ViewProjects from './components/projects/ViewProjects';
import Teams from './components/teams/Teams';
import Tasks from './components/tasks/Tasks';
import ProjectDashboard from './components/projects/ProjectDashboard';
import Timer from './components/timer/Timer';
import ProjectTeam from './components/teams/ProjectTeam';


function App() {
  return (
    <Router>
        <Navbars/>
       <div className="App">
        {/* <HomePage/> */}
      <Routes>
        {/* <Route path="/" element={<HomePage/>}/> */}
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="projects" element={<Projects/>}>
        <Route path="view" element={<ViewProjects/>}/>
        <Route path="dashboard" element={<ProjectDashboard/>}/>
        <Route path="tasks" element={<Tasks/>}/>
        <Route path="team" element={<ProjectTeam/>}/>
        </Route>
        <Route path="teams" element={<Teams/>}/>
        <Route path="timer" element={<Timer/>}/>
      </Routes>
      </div>
     </Router>
  );
}

export default App;
